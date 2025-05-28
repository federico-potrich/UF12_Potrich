import { InputNumberModule } from 'primeng/inputnumber';
import { Component, inject, signal } from '@angular/core';
import { jsPDF } from "jspdf";
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { ClassesDataServiceService } from '../../../service/ClassesData/classes-data-service.service';
import { CharacterDataService } from '../../../service/CharacterData/character-data.service';
import { RacesDataService } from '../../../service/races-data/races-data.service';
import { AccordionModule } from 'primeng/accordion';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-container-create-character-sheet',
  imports: [StepperModule, ButtonModule, Select, FormsModule, AccordionModule, InputNumberModule, JsonPipe],
  templateUrl: './container-create-character-sheet.component.html',
  styleUrl: './container-create-character-sheet.component.scss'
})
export class ContainerCreateCharacterSheetComponent {

  selectedCharacterName = signal<string>("");
  selectedPersonalName = signal<string>("");

  selectedClass = signal<any | undefined>(undefined);
  selectedRace = signal<any | undefined>(undefined);
  selectedBackground = signal<any | undefined>(undefined);

  serviceClass = inject(ClassesDataServiceService);
  serviceCharacter = inject(CharacterDataService);
  serviceRace = inject(RacesDataService);

  stats = {
    STRENGTH: 0,
    DEXTERITY: 0,
    CONSTITUTION: 0,
    INTELLIGENCE: 0,
    WISDOM: 0,
    CHARISMA: 0
  }
  saving_thows = signal<any | undefined>(undefined)

  level: number = 1

  skills = signal<any>({})

  CA = signal<number>(10)
  initiative = signal<number>(this.stats.DEXTERITY)
  speed = signal<number>(0)

  constructor() {
    this.serviceClass.getBriefData()
    this.serviceCharacter.getDataBetter('backgrounds')
    this.serviceRace.getData()
  }
  save() {
    this.serviceClass.getCompleteData(this.serviceClass.ClassesDataListComputed().filter(el => el.name == this.selectedClass().name)[0].index)
    this.serviceRace.getCompleteData(this.serviceRace.racesListComputed().filter((el:any) => el.name == this.selectedRace().name)[0].index)

    this.saving_thows.set(this.serviceClass.savingListComputed())
    this.skills.set(
      this.serviceClass.savingListComputed()
        .flatMap(entry => entry.skills)            // prende tutte le skills in un array piatto
        .map(skill => ({ name: skill.name, index: skill.index }))               // prende solo il nome
    );
  }
  save2(){
    this.CA.set(10+this.getModifier(this.stats.DEXTERITY))
    this.speed.set(this.serviceRace.racesListComputed().speed)
  }

  generatePDF() {
    const doc = new jsPDF();

    const name = this.selectedPersonalName();
    const characterName = this.selectedCharacterName();
    const charClass = this.selectedClass()?.name || 'N/A';
    const race = this.selectedRace()?.name || 'N/A';
    const background = this.selectedBackground()?.name || 'N/A';
    const level = this.level;

    const stats = this.stats;
    const proficiencyBonus = this.getProficiencyBonus(level);
    const skills = this.skills();

    let y = 20;

    doc.setFontSize(16);
    doc.text('Scheda del Personaggio', 20, y); y += 10;

    doc.setFontSize(12);
    doc.text(`Nome Giocatore: ${name}`, 20, y); y += 7;
    doc.text(`Nome Personaggio: ${characterName}`, 20, y); y += 7;
    doc.text(`Classe: ${charClass}`, 20, y); y += 7;
    doc.text(`Razza: ${race}`, 20, y); y += 7;
    doc.text(`Background: ${background}`, 20, y); y += 7;
    doc.text(`Livello: ${level}`, 20, y); y += 10;

    doc.setFontSize(14);
    doc.text('Statistiche:', 20, y); y += 8;

    doc.setFontSize(12);
    for (const [stat, score] of Object.entries(stats)) {
      const mod = this.getModifier(score);
      doc.text(`${stat}: ${score} (mod ${mod >= 0 ? '+' : ''}${mod})`, 25, y); y += 6;
    }


    doc.setFontSize(14);
    doc.text('Statistiche:', 20, y); y += 8;

    doc.setFontSize(12);
    doc.text(`CA (Classe Armatura): ${this.CA()}`, 25, y); y += 6;
    doc.text(`Iniziativa: ${this.initiative() >= 0 ? '+' : ''}${this.initiative()}`, 25, y); y += 6;
    doc.text(`Velocità: ${this.serviceRace.racesCompleteListComputed().speed} piedi`, 25, y); y += 6;

    // Calcolo HP base per un barbaro livello 1 = 12 + Costituzione
    const baseHP = 12 + this.getModifier(this.stats.CONSTITUTION);
    doc.text(`Punti Ferita (HP): ${baseHP}`, 25, y); y += 10;


    doc.setFontSize(12);
    
    y += 6;
    doc.setFontSize(14);
    doc.text('Abilità Competenti:', 20, y); y += 8;
    for (const skill of this.serviceClass.savingListComputed().flatMap(entry => entry.skills).map(skill => ({ name: skill.name, index: skill.index }))) {
      const skillName = skill.name;
      const skillIndex = skill.index;

      // Corrispondenza skill -> stat per calcolo modificatore (aggiusta se hai una mappatura più precisa)
      const skillToStatMap: Record<string, keyof typeof stats> = {
        "acrobatics": "DEXTERITY",
        "animal-handling": "WISDOM",
        "arcana": "INTELLIGENCE",
        "athletics": "STRENGTH",
        "deception": "CHARISMA",
        "history": "INTELLIGENCE",
        "insight": "WISDOM",
        "intimidation": "CHARISMA",
        "investigation": "INTELLIGENCE",
        "medicine": "WISDOM",
        "nature": "INTELLIGENCE",
        "perception": "WISDOM",
        "performance": "CHARISMA",
        "persuasion": "CHARISMA",
        "religion": "INTELLIGENCE",
        "sleight-of-hand": "DEXTERITY",
        "stealth": "DEXTERITY",
        "survival": "WISDOM"
      };


      const statUsed = skillToStatMap[skillIndex];
      if (!statUsed) continue;

      const base = this.getModifier(stats[statUsed]);
      const total = base + proficiencyBonus;

      doc.text(`${skillName}: ${total >= 0 ? '+' : ''}${total}`, 25, y); y += 6;
    }

    doc.save(`${characterName || 'scheda-personaggio'}.pdf`);
  }

  getModifier(score: number): number {
    const modifierTable = new Map<number, number>([
      [0, -5], [1, -5],
      [2, -4], [3, -4],
      [4, -3], [5, -3],
      [6, -2], [7, -2],
      [8, -1], [9, -1],
      [10, 0], [11, 0],
      [12, 1], [13, 1],
      [14, 2], [15, 2],
      [16, 3], [17, 3],
      [18, 4], [19, 4],
      [20, 5], [21, 5]
    ]);

    return modifierTable.get(score) ?? NaN; // restituisce 0 se score è fuori range
  }
  getProficiencyBonus(level: number): number {
    if (level < 1) return 0; // livello invalido
    if (level < 5) return 2;
    if (level < 9) return 3;
    if (level < 13) return 4;
    if (level < 17) return 5;
    return 6; // livello 17+
  }
}

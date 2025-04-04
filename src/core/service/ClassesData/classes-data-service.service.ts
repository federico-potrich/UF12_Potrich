import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ClassLevelModel, ClassModel } from '../../../model/class/_classes.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesDataServiceService {
  readonly #URL = "https://www.dnd5eapi.co/api/2014";
  readonly #http = inject(HttpClient);
  readonly #ClassesDataBriefList = signal<Res[]>([]);
  readonly ClassesDataListComputed = computed(() => this.#ClassesDataBriefList());
  
  readonly #ClassesDataCompleteList = signal<ClassModel>({
    index: '',
    name: '',
    hit_die: 0,
    proficiency_choices: [],
    proficiencies: [],
    saving_throws: [],
    class_levels: '',
    subclasses: [],
    spellcasting: undefined, // o null
    url: ''
  });
  
  readonly ClassesDataCompleteListComputed = computed(() => this.#ClassesDataCompleteList());
  
  readonly #levelledDataClassesList = signal<ClassLevelModel[]>([]);
  readonly levelledDataClassesListComputed = computed(() => this.#levelledDataClassesList());

  getBriefData() {
    this.#http.get<ResComposed>(`${this.#URL}/classes`).subscribe((classList: ResComposed) => {
      this.#ClassesDataBriefList.set(classList.results);
    });
  }
  getCompleteData(index: string) {
    this.#http.get<ClassModel>(`${this.#URL}/classes/${index}`).subscribe((data: ClassModel) => {
      this.#ClassesDataCompleteList.set(data);
    });
  }
  getLevelData(index: string) {
    this.#http.get<ClassLevelModel[]>(`${this.#URL}/classes/${index}/levels`).subscribe((data: ClassLevelModel[]) => {
      this.#levelledDataClassesList.set(data);
    });
  }
}

/**
 * Interfaccia per rappresentare un singolo elemento di classe.
 */
export interface Res {
  index: string;
  name: string;
  url: string;
}

/**
 * Interfaccia per rappresentare la risposta composta dell'API.
 */
export interface ResComposed {
  count: number;
  results: Res[];
}

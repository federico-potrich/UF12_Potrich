import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Res } from '../ClassesData/classes-data-service.service';
import { Monster } from '../../../model/monster/_monster.model';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  readonly #URL = "https://www.dnd5eapi.co/api/2014";
  readonly #http = inject(HttpClient);
  readonly #monsterDataBriefList = signal<Res[]>([]);
  readonly monsterDataBriefListComp = computed(() => this.#monsterDataBriefList());
  readonly #monsterDataCompleteList = signal<Monster>({
    _id: '',
    index: '',
    name: '',
    desc: '',
    size: '',
    type: '',
    subtype: '',
    alignment: '',
    armor_class: [],
    hit_points: -1,
    hit_dice: '',
    hit_points_roll: '',
    speed: {
      walk: '',
      _id: ''
    },
    strength: -1,
    dexterity: -1,
    constitution: -1,
    intelligence: -1,
    wisdom: -1,
    charisma: -1,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: {
      passive_perception: -1,
      _id: ''
    },
    languages: '',
    challenge_rating: -1,
    proficiency_bonus: -1,
    xp: -1,
    special_abilities: [],
    actions: [],
    image: '',
    url: '',
    updated_at: new Date().toISOString(),
    forms: [],
    legendary_actions: [],
    reactions: []
  });
  readonly monsterDataCompleteListComp = computed(() => this.#monsterDataCompleteList());

  constructor() {
    
  }
  getBriefData() {
    this.#http.get<any>(`${this.#URL}/monsters`).subscribe((monsterData: any) => {
      // console.log(monsterData)
      this.#monsterDataBriefList.set(monsterData.results);
    })
  }

  getCompleteData(index: string) {
    this.#http.get<Monster>(`${this.#URL}/monsters/${index}`).subscribe((monsterData: Monster) => {
      console.log(monsterData)
      this.#monsterDataCompleteList.set(monsterData);
    })
  }
}

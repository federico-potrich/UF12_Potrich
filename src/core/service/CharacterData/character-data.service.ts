import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  readonly #URL = "https://www.dnd5eapi.co/api/2014/";
  readonly #http = inject(HttpClient);
  readonly #CharacterDataList = signal<any>([]);
  readonly CharacterDataListComputed = computed(() => this.#CharacterDataList());
  
  constructor() { }
  


  getData(suffix: CharacterValue ='ability-scores'){
    this.#http.get<any>(this.#URL+suffix).subscribe(el=>{
      this.#CharacterDataList.set(el)
    })
  }
}
export type CharacterValue = "ability-scores" | "alignments" | "backgrounds" | "languages" | "proficiencies" | "skills";
/**
 * interfaccia per abbreviare il mio lavoro
 */
export interface CharacterDataValueSuffix{
  CharacterValue:CharacterValue,
  Path:string
} 
import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  readonly #URL = "https://www.dnd5eapi.co/api/2014/";
  readonly #http = inject(HttpClient);
  readonly #EquipmentDataList = signal<any>([]);
  readonly EquipmentDataListComputed = computed(() => this.#EquipmentDataList());
  
  constructor() { }

  getData(suffix: EquipmentValue ='equipment'){
    this.#http.get<any>(this.#URL+suffix).subscribe(el=>{

      this.#EquipmentDataList.set(el)
    })
  }
}
export type EquipmentValue = "equipment" | "equipment-categories" | "magic-items" | "magic-items" | "weapon-properties" ;
/**
 * interfaccia per abbreviare il mio lavoro
 */
export interface EquipmentDataValueSuffix{
  EquipmentValue:EquipmentValue,
  Path:string
} 
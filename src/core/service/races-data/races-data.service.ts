import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RacesDataService {
  readonly #URL = "https://www.dnd5eapi.co/api/2014/";
  readonly #http = inject(HttpClient);
  readonly #racesList = signal<any>([]);
  readonly racesListComputed = computed(() => this.#racesList());
  readonly #racesCompleteList = signal<any>([]);
  readonly racesCompleteListComputed = computed(() => this.#racesCompleteList());

  constructor() { }

  getData() {
    this.#http.get<any>(this.#URL + "races").subscribe(el => {
      this.#racesList.set(el.results)
    })
  }
  getCompleteData(index: string) {
    this.#http.get<any>(`${this.#URL}/races/${index}`).subscribe((data: any) => {
      this.#racesCompleteList.set(data);
    });
  }
}

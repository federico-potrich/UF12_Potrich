import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { _Generic, ClassLevelModel, ClassModel, ProficiencyChoice, Spellcasting } from '../../../model/class/_classes.model';
import { catchError, of, retry } from 'rxjs';
import { Router } from '@angular/router';
import { Proficiency } from '../../../model/monster/_monster.model';

@Injectable({
    providedIn: 'root'
})
export class ClassesDataServiceService {
    readonly #URL = "https://www.dnd5eapi.co/api/2014";
    readonly #http = inject(HttpClient);
    readonly #ClassesDataBriefList = signal<Res[]>([]);
    readonly ClassesDataListComputed = computed(() => this.#ClassesDataBriefList());
    readonly #router = inject(Router);

    readonly #ClassesDataCompleteList = signal<ClassModel>({
        index: '',
        name: '',
        hit_die: 0,
        proficiency_choices: [],
        proficiencies: [],
        saving_throws: [],
        class_levels: '',
        subclasses: [],
        spellcasting: undefined,
        url: ''
    });

    readonly ClassesDataCompleteListComputed = computed(() => this.#ClassesDataCompleteList());

    readonly #levelledDataClassesList = signal<ClassLevelModel[]>([]);
    readonly levelledDataClassesListComputed = computed(() => this.#levelledDataClassesList());
    
    readonly #CustomDataClassesList = signal<ClassModel[]>([]);
    readonly CustomDataClassesListComputed = computed(() => this.#CustomDataClassesList());

    readonly #savingList = signal<any[]>([])
    readonly savingListComputed = computed(()=>this.#savingList())

    getBriefData() {
        this.#http.get<ResComposed>(`${this.#URL}/classes`).subscribe((classList: ResComposed) => {
            let tmp = classList.results;

            // Estrai solo 'index', 'name' e 'url' da CustomDataClassesListComputed
            const customData = this.#CustomDataClassesList().map(item => ({
                index: item.index,
                name: item.name,
                url: item.url
            }));

            // Unisci i due array
            const combinedData = [...tmp, ...customData];

            this.#ClassesDataBriefList.set(combinedData);
        });
    }

    getCompleteData(index: string) {
        this.#http.get<ClassModel>(`${this.#URL}/classes/${index}`).subscribe((data: ClassModel) => {
            this.#ClassesDataCompleteList.set(data);
            this.#savingList.set([])

            data.saving_throws.map(el =>{
                this.#http.get<any>(`${this.#URL}/ability-scores/${el.index}`).subscribe((ABS)=>{
                    this.#savingList.update(list=>[...list, ABS])
                })
            })
        });
    }
    
    getLevelData(index: string) {
        this.#http.get<ClassLevelModel[]>(`${this.#URL}/classes/${index}/levels`).subscribe((data: ClassLevelModel[]) => {
            this.#levelledDataClassesList.set(data);
        });
    }

    getCustomClass(index: string): ClassModel | undefined {
        return this.#CustomDataClassesList().find(item => item.index === index);
    }

    createClass(
        index: string, 
        name: string, 
        hit_die: number, 
        proficiency_choices: ProficiencyChoice[], 
        proficiencies: _Generic[],
        saving_throws: _Generic[], 
        class_levels: string, 
        subclasses: _Generic[],
        url: string,
        spellcasting?: Spellcasting
    ) {
        let newPostToCreate: ClassModel = {
            index: index,
            name: name,
            hit_die: hit_die,
            proficiency_choices: proficiency_choices,
            proficiencies: proficiencies,
            saving_throws: saving_throws,
            class_levels: class_levels,
            subclasses: subclasses,
            spellcasting: spellcasting,
            url: url
        };

        if (newPostToCreate !== null) {
            this.#ClassesDataBriefList.update(() => [...this.#ClassesDataBriefList(), {
                index: newPostToCreate.index,
                name: newPostToCreate.name,
                url: newPostToCreate.url
            }]);

            this.#CustomDataClassesList.update(() => [...this.#CustomDataClassesList(), newPostToCreate]);
            this.#ClassesDataCompleteList.set(newPostToCreate);
            this.#router.navigate(['/classes']);
            console.log(this.#CustomDataClassesList())
        }
        this.#router.navigate(['/view/classes']);

    }
    modifyClass(
        index: string, 
        name: string, 
        hit_die: number, 
        proficiency_choices: ProficiencyChoice[], 
        proficiencies: _Generic[], 
        saving_throws: _Generic[], 
        class_levels: string, 
        subclasses: _Generic[], 
        url: string, 
        spellcasting?: Spellcasting
    ) {
        let postUpdate: ClassModel = {
            index: index,
            name: name,
            hit_die: hit_die,
            proficiency_choices: proficiency_choices,
            proficiencies: proficiencies,
            saving_throws: saving_throws,
            class_levels: class_levels,
            subclasses: subclasses,
            spellcasting: spellcasting,
            url: url
        };
    
        // Aggiorna la lista custom
        // this.#CustomDataClassesList.update(() =>
        //     this.#CustomDataClassesList().map(item =>
        //         item.index === index ? { ...item, ...postUpdate } : item
        //     )
        // );
        console.log(this.#CustomDataClassesList())
        console.log(postUpdate.index)
        let oldPost = this.#CustomDataClassesList().find((post) => post.index === postUpdate.index);
        if(oldPost === undefined) throw new Error("Post non trovato");


        let oldPostIndex = this.#CustomDataClassesList().indexOf(oldPost);
        this.#CustomDataClassesList()[oldPostIndex] = postUpdate
        // Naviga alla pagina delle classi
        this.#router.navigate(['view/classes']);
    }
    
    deleteClass(index: string) {
        // Rimuovi dalla lista dei brief
        this.#ClassesDataBriefList.update(() => 
            this.#ClassesDataBriefList().filter(item => item.index !== index)
        );
    
        // Rimuovi dalla lista custom
        this.#CustomDataClassesList.update(() => 
            this.#CustomDataClassesList().filter(item => item.index !== index)
        );
    
        // Rimuovi dalla lista completa
        if (this.#ClassesDataCompleteList().index === index) {
            this.#ClassesDataCompleteList.set({
                index: '',
                name: '',
                hit_die: 0,
                proficiency_choices: [],
                proficiencies: [],
                saving_throws: [],
                class_levels: '',
                subclasses: [],
                spellcasting: undefined,
                url: ''
            });
        }
        this.#router.navigate(['/view/classes']);

    }
    

    isCustom(index: string): boolean {
        return this.#CustomDataClassesList().some(item => item.index === index);
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

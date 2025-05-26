
import { ClassesDataServiceService } from './../core/service/ClassesData/classes-data-service.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CharacterDataService } from './../core/service/CharacterData/character-data.service';
import { MonsterService } from '../core/service/monsterService/monster.service';
import { EquipmentService } from '../core/service/equipment/equipment.service';

@Component({
    selector: 'app-root',
    imports: [ButtonModule, Menubar, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    items: MenuItem[] | undefined;

    readonly CDSRV = inject(CharacterDataService);
    readonly ESRV = inject(EquipmentService)
    readonly #router = inject(Router);
    
    readonly classesDataServiceTMP = inject(ClassesDataServiceService);
    readonly monsterDataServiceTMP = inject(MonsterService);

    ngOnInit() {
        this.items = [
            {
                label: 'Manual',
                items: [
                    {
                        label: 'Classes-Subclasses',
                        icon: '',
                        items: [
                            {
                                label: 'Classes',
                                icon: 'ì',
                                command: ()=>{
                                    this.#router.navigate(['/view/classes'])
                                    this.classesDataServiceTMP.getBriefData()
                                }
                            },
                            {
                                label: 'Subclasses',
                                icon: 'ì',
                            }
                        ]
                    },
                    {
                        label: 'Races-Subraces',
                        icon: '',
                        items: [
                            {
                                label: 'Races',
                                icon: ''
                            },
                            {
                                label: 'Subraces',
                                icon: ''
                            }
                        ]
                    },
                    {
                        label: 'Monster',
                        icon: '',
                        command: ()=>{
                            this.monsterDataServiceTMP.getBriefData()
                            this.#router.navigate(['/view/monsters'])
                        }
                    },
                    {
                        label: 'Spells',
                        icon: ''
                    },
                    {
                        label: 'Equipment',
                        icon: '',
                        items: [
                            {
                                label: 'Equipment Category',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['view/equipment/equipment-categories'])
                                    this.ESRV.getData('equipment-categories');
                                }
                            },
                            {
                                label: 'Classic Equipment',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['view/equipment/equipment'])
                                    this.ESRV.getData('equipment');
                                }
                            },
                            {
                                label: 'Magic Item',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['view/equipment/magic-items'])
                                    this.ESRV.getData('magic-items');
                                }
                            },
                            {
                                label: 'Weapon Property',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['view/equipment/weapon-properties'])
                                    this.ESRV.getData('weapon-properties');
                                }
                            }
                        ]
                    },
                    {
                        label: 'Character Data',
                        icon: '',
                        items: [
                            {
                                label: 'Ability',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['view/character/ability-scores'])
                                    this.CDSRV.getData('ability-scores');
                                }
                            },
                            {
                                label: 'Alignment',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['view/character/alignments'])
                                    this.CDSRV.getData('alignments');
                                }
                            },
                            {
                                label: 'Background',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['/view/character/backgrounds'])
                                    this.CDSRV.getData('backgrounds');
                                }
                            },
                            {
                                label: 'Language',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['/view/character/languages'])
                                    this.CDSRV.getData('languages');
                                }
                            },
                            {
                                label: 'Proficiency',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['/view/character/proficiencies'])
                                    this.CDSRV.getData('proficiencies');
                                }
                            },
                            {
                                label: 'Skills',
                                icon: '',
                                command: () => {
                                    this.#router.navigate(['/view/character/skills'])
                                    this.CDSRV.getData('skills');
                                }
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Create Character Sheet',
            }
        ];
    }
}

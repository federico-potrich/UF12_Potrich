
import { ClassesDataServiceService } from './../core/service/ClassesData/classes-data-service.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CharacterDataService } from './../core/service/CharacterData/character-data.service';
import { MonsterService } from '../core/service/monsterService/monster.service';

@Component({
    selector: 'app-root',
    imports: [ButtonModule, Menubar, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    items: MenuItem[] | undefined;

    readonly CDSRV = inject(CharacterDataService);
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
                                    this.#router.navigate(['/classes'])
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
                            this.#router.navigate(['/monsters'])
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
                                icon: ''
                            },
                            {
                                label: 'Classic Equipment',
                                icon: ''
                            },
                            {
                                label: 'Magic Item',
                                icon: ''
                            },
                            {
                                label: 'Weapon Property',
                                icon: ''
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
                                    this.#router.navigate(['/character'])
                                    this.CDSRV.getData('ability-scores');
                                }
                            },
                            {
                                label: 'Alignment',
                                icon: '',
                                command: () => {
                                    this.CDSRV.getData('alignments');
                                }
                            },
                            {
                                label: 'Background',
                                icon: '',
                                command: () => {
                                    this.CDSRV.getData('backgrounds');
                                }
                            },
                            {
                                label: 'Language',
                                icon: '',
                                command: () => {
                                    this.CDSRV.getData('languages');
                                }
                            },
                            {
                                label: 'Proficiency',
                                icon: '',
                                command: () => {
                                    this.CDSRV.getData('proficiencies');
                                }
                            },
                            {
                                label: 'Skills',
                                icon: '',
                                command: () => {
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

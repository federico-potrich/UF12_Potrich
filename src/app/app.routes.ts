import { PostNewItemComponent } from './../core/post-new-item/post-new-item.component';

import { Routes } from '@angular/router';
import { CharacterDataComponent } from '../component/character-data/character-data.component';
import { ClassesComponentComponent } from '../component/classes-component/classes-component.component';
import { HomePageComponent } from '../component/home-page/home-page.component';
import { DetailsComponent } from '../component/details/details.component';
import { MonsterComponent } from '../component/monster/monster.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';
import { GeneralDisplayCardComponent } from '../core/components/general-display-card/general-display-card.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
    },
    {
        path: 'view',
        component: GeneralDisplayCardComponent,
        children: [
            {
                path: 'classes', component: ClassesComponentComponent,
                children: [
                    {
                        path: 'classes/:index',
                        component: DetailsComponent
                    },
                ]
            },
            {
                path: 'character',
                component: CharacterDataComponent,
                children: [
                    { path: 'ability-scores', component: AbilityScoresComponent },
                    { path: 'alignments', component: AlignmentsComponent },
                    { path: 'backgrounds', component: BackgroundsComponent },
                    { path: 'languages', component: LanguagesComponent },
                    { path: 'proficiencies', component: ProficienciesComponent },
                    { path: 'skills', component: SkillsComponent },
                    { path: '', redirectTo: 'ability-scores', pathMatch: 'full' } // redirect di default
                ]
            }

            {
                path: 'monsters', component: MonsterComponent,
                children: [
                    {
                        path: 'monsters/:index',
                        component: DetailsComponent
                    },
                ]
            },
            // { path: 'equipment', component: EquipmentComponent },
            // { path: 'races', component: RacesComponent },
            // { path: 'spells', component: SpellsComponent },
            { path: ':type/:index', component: DetailsComponent }, // opzionale
        ]
    },
    {
        path: 'edit',
        component: GeneralDisplayCardComponent,
        children: [
            { path: 'classes', component: ClassesComponentComponent },
            { path: 'character', component: CharacterDataComponent },
            { path: 'monsters', component: MonsterComponent },
            // { path: 'equipment', component: EquipmentComponent },
            // { path: 'races', component: RacesComponent },
            // { path: 'spells', component: SpellsComponent },
            { path: ':type/:index', component: DetailsComponent }, // opzionale
        ]
    },
    {
        path: 'post',
        component: GeneralDisplayCardComponent,
        children: [
            { path: 'classes', component: ClassesComponentComponent },
            { path: 'character', component: CharacterDataComponent },
            { path: 'monsters', component: MonsterComponent },
            // { path: 'equipment', component: EquipmentComponent },
            // { path: 'races', component: RacesComponent },
            // { path: 'spells', component: SpellsComponent },
            { path: ':type/:index', component: DetailsComponent }, // opzionale
        ]
    },
    {
        path: 'delete',
        component: GeneralDisplayCardComponent,
        children: [
            { path: 'classes', component: ClassesComponentComponent },
            { path: 'character', component: CharacterDataComponent },
            { path: 'monsters', component: MonsterComponent },
            // { path: 'equipment', component: EquipmentComponent },
            // { path: 'races', component: RacesComponent },
            // { path: 'spells', component: SpellsComponent },
            { path: ':type/:index', component: DetailsComponent }, // opzionale
        ]
    },
    {
        path: 'character',
        component: CharacterDataComponent
    },
    {
        path: 'monsters',
        component: MonsterComponent
    },
    {
        path: 'monsters/:index',
        component: DetailsComponent
    },

    {
        path: 'post/:category',
        component: PostNewItemComponent
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

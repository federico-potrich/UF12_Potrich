import { PostNewItemComponent } from './../core/feature/post-new-item/post-new-item.component';

import { Routes } from '@angular/router';
import { CharacterDataComponent } from '../core/components/character-data/character-data.component';
import { ClassesComponentComponent } from '../core/components/classes-component/classes-component.component';
import { HomePageComponent } from '../core/components/home-page/home-page.component';
import { DetailsComponent } from '../core/components/details/details.component';
import { MonsterComponent } from '../core/components/monster/monster.component';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { GeneralDisplayCardComponent } from '../core/components/general-display-card/general-display-card.component';
import { AbilityScoresComponent } from '../core/components/character/ability-scores/ability-scores.component';
import { AlignmentsComponent } from '../core/components/character/alignments/alignments.component';
import { BackgroundsComponent } from '../core/components/character/backgrounds/backgrounds.component';
import { LanguagesComponent } from '../core/components/character/languages/languages.component';
import { ProficienciesComponent } from '../core/components/character/proficiencies/proficiencies.component';
import { SkillsComponent } from '../core/components/character/skills/skills.component';
import { EquipmentPageComponent } from '../core/components/equipment-page/equipment-page.component';
import { EditPostComponent } from '../core/feature/edit-post/edit-post.component';
import { ContainerCreateCharacterSheetComponent } from '../core/components/characterSheet/container-create-character-sheet/container-create-character-sheet.component';

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
                    { path: '', redirectTo: 'ability-scores', pathMatch: 'full' }
                ]
            },
            {
                path: 'monsters', component: MonsterComponent,
                children: [
                    {
                        path: 'monsters/:index',
                        component: DetailsComponent
                    },
                ]
            },
            {
                path: 'equipment/:index',
                component: EquipmentPageComponent
            },
            // { path: 'races', component: RacesComponent },
            // { path: 'spells', component: SpellsComponent },
            { path: ':type/:index', component: DetailsComponent } //da rivedere
        ]
    },
    {
        path: 'edit',
        component: GeneralDisplayCardComponent,
        children: [
            { path: ':category/:index', component: EditPostComponent },
        ]
    },
    {
        path: 'post',
        component: GeneralDisplayCardComponent,
        children: [
            { path: ':category', component: PostNewItemComponent },
        ]
    },
    {
        path: 'delete',
        component: GeneralDisplayCardComponent,
        children: [
            { path: 'classes', component: ClassesComponentComponent },
        ]
    },
    {
        path:'generateSheet',
        component:ContainerCreateCharacterSheetComponent
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

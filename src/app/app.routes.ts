import { Routes } from '@angular/router';
import { CharacterDataComponent } from '../component/character-data/character-data.component';
import { ClassesComponentComponent } from '../component/classes-component/classes-component.component';
import { HomePageComponent } from '../component/home-page/home-page.component';
import { DetailsComponent } from '../component/details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'character',
        component: CharacterDataComponent
    },
    {
        path: 'classes',
        component: ClassesComponentComponent
    },
    {
        path: 'classes/:index',
        component: DetailsComponent
    }
];

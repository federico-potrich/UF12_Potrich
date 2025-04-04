import { Routes } from '@angular/router';
import { CardDisplayComponent } from '../component/card-display/card-display.component';
import { CharacterDataComponent } from '../component/character-data/character-data.component';

export const routes: Routes = [
    {
        path: '',
        component: CardDisplayComponent
    },
    {
        path: 'character',
        component: CharacterDataComponent
    }
];

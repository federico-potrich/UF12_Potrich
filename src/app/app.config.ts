import { CharacterDataService } from './../core/service/CharacterData/character-data.service';
import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';
import {MyPreset} from '../custome/mytheme'
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ 
      eventCoalescing: true 
    }), 
    provideRouter(routes),
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyPreset
            }
        }),
        
    provideAppInitializer(() => {
      inject(CharacterDataService).getData();
    }),
    provideHttpClient(),
  ]
};

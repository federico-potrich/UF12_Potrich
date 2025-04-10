import { ClassesDataServiceService } from './../../core/service/ClassesData/classes-data-service.service';
import { Component, inject, effect, Signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
import { MonsterService } from '../../core/service/monsterService/monster.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ButtonModule, AccordionModule ,FieldsetModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  readonly #route: ActivatedRoute = inject(ActivatedRoute);
  readonly service = inject(ClassesDataServiceService);
  readonly serviceMonster = inject(MonsterService);
  readonly monster = this.serviceMonster.monsterDataCompleteListComp()

  fullPath : any;
  
  constructor() {
    const urlSegments = this.#route.snapshot.url;
    const _Index = this.#route.snapshot.params['index'];
    this.fullPath = urlSegments.map(segment => segment.path)[0];

    console.log(this.fullPath)
    
    switch (this.fullPath) {
      case 'classes':
        this.service.getCompleteData(_Index);
        this.service.getLevelData(_Index);
        break;
      case 'monsters':
        this.serviceMonster.getCompleteData(_Index);
        break;
      default:
        break;
    }
  }
}

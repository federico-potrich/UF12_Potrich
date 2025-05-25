import { ClassesDataServiceService } from '../../service/ClassesData/classes-data-service.service';
import { Component, inject, effect, Signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
import { MonsterService } from '../../service/monsterService/monster.service';
import { ClassModel } from '../../../model/class/_classes.model';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ButtonModule, AccordionModule ,FieldsetModule, ToolbarModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  delete() {
    this.service.deleteClass(this.#route.snapshot.params['index'])
  }
  modify() {
    
  }
  readonly #route: ActivatedRoute = inject(ActivatedRoute);
  readonly service = inject(ClassesDataServiceService);
  readonly serviceMonster = inject(MonsterService);
  readonly monster = this.serviceMonster.monsterDataCompleteListComp()

  fullPath : any;
  customClass: ClassModel | undefined;
  
  constructor() {
    const urlSegments = this.#route.snapshot.url;
    const _Index = this.#route.snapshot.params['index'];
    this.fullPath = urlSegments.map(segment => segment.path)[0];
    
    
    switch (this.fullPath) {
      case 'classes':
        if(!this.isCustom()){
          this.service.getCompleteData(_Index);
          this.service.getLevelData(_Index);
        }else{
          this.customClass = this.service.getCustomClass(_Index)
        }
        break;
      case 'monsters':
        this.serviceMonster.getCompleteData(_Index);
        break;
      default:
        break;
    }
  }
  isCustom(){
    return this.service.isCustom(this.#route.snapshot.params['index'])
  }
}

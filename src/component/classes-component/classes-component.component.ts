import { ButtonModule } from 'primeng/button';
import { CardDisplayComponent } from '../card-display/card-display.component';
import { ClassesDataServiceService } from './../../core/service/ClassesData/classes-data-service.service';
import { Component, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { Router } from '@angular/router';
import { CardComponent } from '../../core/components/card/card.component';
@Component({
  selector: 'app-classes-component',
  imports: [CardComponent, ToolbarModule, ButtonModule],
  templateUrl: './classes-component.component.html',
  styleUrl: './classes-component.component.scss'
})
export class ClassesComponentComponent {
  readonly classesDataService = inject(ClassesDataServiceService);
  readonly #router = inject(Router);
  constructor(){
    this.classesDataService.getBriefData()
  }
  post(){
    this.#router.navigate(['/post/classes'])
  }
}

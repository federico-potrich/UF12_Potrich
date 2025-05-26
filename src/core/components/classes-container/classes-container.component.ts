import { ButtonModule } from 'primeng/button';
import { ClassesDataServiceService } from '../../service/ClassesData/classes-data-service.service';
import { Component, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-classes-container',
  imports: [CardComponent, ToolbarModule, ButtonModule, RouterOutlet],
  templateUrl: './classes-container.component.html',
  styleUrl: './classes-container.component.scss'
})
export class ClassesContainerComponent {
  readonly classesDataService = inject(ClassesDataServiceService);
  readonly #router = inject(Router);
  constructor(){
    this.classesDataService.getBriefData()
  }
  post(){
    this.#router.navigate(['/post/classes'])
  }
}

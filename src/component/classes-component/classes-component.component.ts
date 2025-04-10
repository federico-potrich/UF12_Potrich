import { ButtonModule } from 'primeng/button';
import { CardDisplayComponent } from '../card-display/card-display.component';
import { ClassesDataServiceService } from './../../core/service/ClassesData/classes-data-service.service';
import { Component, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-classes-component',
  imports: [CardDisplayComponent, ToolbarModule, ButtonModule],
  templateUrl: './classes-component.component.html',
  styleUrl: './classes-component.component.scss'
})
export class ClassesComponentComponent {
  readonly classesDataService = inject(ClassesDataServiceService);
  readonly #router = inject(Router);
  post(){
    this.#router.navigate(['/post/classes'])
  }
}

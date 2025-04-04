import { CardDisplayComponent } from '../card-display/card-display.component';
import { ClassesDataServiceService } from './../../core/service/ClassesData/classes-data-service.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-classes-component',
  imports: [CardDisplayComponent],
  templateUrl: './classes-component.component.html',
  styleUrl: './classes-component.component.scss'
})
export class ClassesComponentComponent {
  readonly classesDataService = inject(ClassesDataServiceService);
}

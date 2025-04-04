import { ClassesDataServiceService } from './../../core/service/ClassesData/classes-data-service.service';
import { Component, inject, effect, Signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';

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

  constructor() {
    const classIndex = this.#route.snapshot.params['index'];
    this.service.getCompleteData(classIndex);
    this.service.getLevelData(classIndex);
  }
}

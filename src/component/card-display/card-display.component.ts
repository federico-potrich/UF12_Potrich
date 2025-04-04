import { Component, inject, input } from '@angular/core';
import { ClassesDataServiceService, Res } from '../../core/service/ClassesData/classes-data-service.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-display',
  imports: [ButtonModule],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.scss'
})
export class CardDisplayComponent {
  readonly card = input.required<Res>()
  readonly cardManagerSrv = inject(ClassesDataServiceService);
  readonly #router = inject(Router);

  getDetails(dataDetails: Res){
    console.log(dataDetails)
    this.#router.navigate(['/classes/'+dataDetails.index])
  }
}

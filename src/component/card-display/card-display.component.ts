import { Component, inject, input } from '@angular/core';
import { ClassesDataServiceService, Res } from '../../core/service/ClassesData/classes-data-service.service';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-display',
  imports: [ButtonModule],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.scss'
})
export class CardDisplayComponent {
  readonly card = input.required<Res>()
  readonly cardManagerSrv = inject(ClassesDataServiceService);
  readonly #route: ActivatedRoute = inject(ActivatedRoute);
  readonly #router = inject(Router);
  fullPath: any;

  getDetails(dataDetails: Res){
    console.log(dataDetails)
    const urlSegments = this.#route.snapshot.url;
    this.fullPath = urlSegments.map(segment => segment.path);
    console.log(this.fullPath)
    this.#router.navigate([`/${this.fullPath[0]}/${dataDetails.index}`])
  }
}

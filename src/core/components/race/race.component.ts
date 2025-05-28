import { Component, inject } from '@angular/core';
import { RacesDataService } from '../../service/races-data/races-data.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-race',
  imports: [CardComponent],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss'
})
export class RaceComponent {
  service = inject(RacesDataService)
}

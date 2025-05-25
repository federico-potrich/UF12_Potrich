import { CharacterValue } from './../../../service/CharacterData/character-data.service';
import { Component, inject } from '@angular/core';
import { CharacterDataService } from '../../../service/CharacterData/character-data.service';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../../card/card.component';


@Component({
  selector: 'app-proficiencies',
  imports: [CardComponent],
  templateUrl: './proficiencies.component.html',
  styleUrl: '../common.scss'
})
export class ProficienciesComponent {
  service = inject(CharacterDataService)
  router = inject(ActivatedRoute)
  constructor(){
    this.service.getData(this.router.snapshot.url[0].path as (CharacterValue))
  }

}

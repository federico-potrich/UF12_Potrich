import { Component, inject } from '@angular/core';
import { CharacterDataService, CharacterValue } from '../../../service/CharacterData/character-data.service';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-alignments',
  imports: [CardComponent],
  templateUrl: './alignments.component.html',
  styleUrl: '../common.scss'
})
export class AlignmentsComponent {

  service = inject(CharacterDataService)
  router = inject(ActivatedRoute)
  constructor(){
    this.service.getData(this.router.snapshot.url[0].path as (CharacterValue))
  }
}

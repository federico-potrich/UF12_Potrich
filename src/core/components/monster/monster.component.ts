import { CardComponent } from '../card/card.component';
import { MonsterService } from '../../service/monsterService/monster.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-monster',
  imports: [CardComponent],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.scss'
})
export class MonsterComponent {

  service = inject(MonsterService)
  constructor(){
    this.service.getBriefData()
  }
}

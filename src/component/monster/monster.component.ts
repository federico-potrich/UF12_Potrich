import { CardDisplayComponent } from '../card-display/card-display.component';
import { MonsterService } from './../../core/service/monsterService/monster.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-monster',
  imports: [CardDisplayComponent],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.scss'
})
export class MonsterComponent {

  service = inject(MonsterService)
  constructor(){
    this.service.getBriefData()
  }
}

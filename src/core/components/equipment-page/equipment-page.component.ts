import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { EquipmentService, EquipmentValue } from '../../service/equipment/equipment.service';

@Component({
  selector: 'app-equipment-page',
  imports: [CardComponent],
  templateUrl: './equipment-page.component.html',
  styleUrl: './equipment-page.component.scss'
})
export class EquipmentPageComponent {
  service = inject(EquipmentService)
  #router = inject(ActivatedRoute)
  constructor(){
    console.log()
    this.service.getData(this.#router.snapshot.params['index'] as (EquipmentValue))
  }

}

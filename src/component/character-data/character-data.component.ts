import { Component, inject, OnInit } from '@angular/core';
import { ClassesDataServiceService } from '../../core/service/ClassesData/classes-data-service.service';

@Component({
  selector: 'app-character-data',
  imports: [],
  templateUrl: './character-data.component.html',
  styleUrl: './character-data.component.scss'
})
export class CharacterDataComponent {
  classData = inject(ClassesDataServiceService)

  ngOnInit(){
    
  }
}

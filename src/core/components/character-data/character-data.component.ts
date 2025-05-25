import { Component, inject, OnInit } from '@angular/core';
import { ClassesDataServiceService } from '../../service/ClassesData/classes-data-service.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-character-data',
  imports: [RouterOutlet],
  templateUrl: './character-data.component.html',
  styleUrl: './character-data.component.scss'
})
export class CharacterDataComponent {
  
}

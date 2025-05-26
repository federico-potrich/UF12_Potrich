import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassesDataServiceService } from '../../service/ClassesData/classes-data-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { _Generic, ProficiencyChoice } from '../../../model/class/_classes.model';
import { Proficiency } from '../../../model/monster/_monster.model';

@Component({
  selector: 'app-edit-post',
  imports: [FloatLabelModule, InputTextModule, ReactiveFormsModule, FormsModule, ButtonModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss'
})
export class EditPostComponent {
    readonly service = inject(ClassesDataServiceService)
    readonly #route = inject(ActivatedRoute)
    _id;
    category;

    index: string = '';
    name: string = '';
    hit_die: number = 0;
    class_levels: string = '';
    url: string = '';
    proficiesChoice: ProficiencyChoice[] = [];
    proficies: _Generic[] = [];
    savingThrows: _Generic[] = [];
    subClasses: _Generic[] = [];
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
          value: new FormControl(1)
        });
    }
    constructor() {
      this._id = this.#route.snapshot.params['index'];
      this.category = this.#route.snapshot.params['category'];
    }

    edit() {
      this.service.modifyClass(this._id, this.name, this.hit_die, this.proficiesChoice, this.proficies, this.savingThrows, this.class_levels, this.subClasses, this.url)
    }
    add(list:any[]){
      list.push({})
    }
}

import { ClassesDataServiceService } from './../../core/service/ClassesData/classes-data-service.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';


@Component({
    selector: 'app-post-new-item',
    imports: [FloatLabelModule, InputTextModule, ReactiveFormsModule, FormsModule, ButtonModule],
    templateUrl: './post-new-item.component.html',
    styleUrl: './post-new-item.component.scss'
})
export class PostNewItemComponent {
    readonly service = inject(ClassesDataServiceService)
    readonly #route = inject(ActivatedRoute)
    category;

    index: string = '';
    name: string = '';
    hit_die: number = 0;
    class_levels: string = '';
    url: string = '';
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(1)
        });
    }
    constructor() {
        this.category = this.#route.snapshot.params['category'];
    }

    post() {
        this.service.createClass(this.index, this.name, this.hit_die, [], [], [], this.class_levels, [], this.url)
    }
}

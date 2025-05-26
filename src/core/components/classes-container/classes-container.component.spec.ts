import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesContainerComponent } from './classes-container.component';

describe('ClassesContainerComponent', () => {
  let component: ClassesContainerComponent;
  let fixture: ComponentFixture<ClassesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

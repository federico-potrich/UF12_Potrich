import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDisplayCardComponent } from './general-display-card.component';

describe('GeneralDisplayCardComponent', () => {
  let component: GeneralDisplayCardComponent;
  let fixture: ComponentFixture<GeneralDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralDisplayCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

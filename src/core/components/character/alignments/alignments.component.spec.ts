import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignmentsComponent } from './alignments.component';

describe('AlignmentsComponent', () => {
  let component: AlignmentsComponent;
  let fixture: ComponentFixture<AlignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

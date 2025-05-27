import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCreateCharacterSheetComponent } from './container-create-character-sheet.component';

describe('ContainerCreateCharacterSheetComponent', () => {
  let component: ContainerCreateCharacterSheetComponent;
  let fixture: ComponentFixture<ContainerCreateCharacterSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerCreateCharacterSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCreateCharacterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

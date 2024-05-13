import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsComponent } from './atoms.component';

describe('AtomsComponent', () => {
  let component: AtomsComponent;
  let fixture: ComponentFixture<AtomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

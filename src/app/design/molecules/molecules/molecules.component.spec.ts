import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculesComponent } from './molecules.component';

describe('MoleculesComponent', () => {
  let component: MoleculesComponent;
  let fixture: ComponentFixture<MoleculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoleculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

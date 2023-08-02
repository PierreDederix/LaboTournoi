import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTournoisComponent } from './gestion-tournois.component';

describe('GestionTournoisComponent', () => {
  let component: GestionTournoisComponent;
  let fixture: ComponentFixture<GestionTournoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionTournoisComponent]
    });
    fixture = TestBed.createComponent(GestionTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

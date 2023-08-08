import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTournoiComponent } from './details-tournoi.component';

describe('DetailsTournoiComponent', () => {
  let component: DetailsTournoiComponent;
  let fixture: ComponentFixture<DetailsTournoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTournoiComponent]
    });
    fixture = TestBed.createComponent(DetailsTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDetalleComponent } from './centro-detalle.component';

describe('CentroDetalleComponent', () => {
  let component: CentroDetalleComponent;
  let fixture: ComponentFixture<CentroDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

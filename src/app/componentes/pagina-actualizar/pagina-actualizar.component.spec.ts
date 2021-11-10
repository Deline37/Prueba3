import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaActualizarComponent } from './pagina-actualizar.component';

describe('PaginaActualizarComponent', () => {
  let component: PaginaActualizarComponent;
  let fixture: ComponentFixture<PaginaActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

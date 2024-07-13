import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorvendedorComponent } from './buscadorvendedor.component';

describe('BuscadorvendedorComponent', () => {
  let component: BuscadorvendedorComponent;
  let fixture: ComponentFixture<BuscadorvendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorvendedorComponent]
    });
    fixture = TestBed.createComponent(BuscadorvendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorproductoComponent } from './buscadorproducto.component';

describe('BuscadorproductoComponent', () => {
  let component: BuscadorproductoComponent;
  let fixture: ComponentFixture<BuscadorproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorproductoComponent]
    });
    fixture = TestBed.createComponent(BuscadorproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

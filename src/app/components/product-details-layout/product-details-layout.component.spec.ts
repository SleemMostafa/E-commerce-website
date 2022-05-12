import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsLayoutComponent } from './product-details-layout.component';

describe('ProductDetailsLayoutComponent', () => {
  let component: ProductDetailsLayoutComponent;
  let fixture: ComponentFixture<ProductDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

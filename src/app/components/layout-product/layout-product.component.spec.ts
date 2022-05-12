import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProductComponent } from './layout-product.component';

describe('LayoutProductComponent', () => {
  let component: LayoutProductComponent;
  let fixture: ComponentFixture<LayoutProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

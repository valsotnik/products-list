/* tslint:disable:no-unused-variable */
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddComponent } from './product-add.component';
import { Store, StoreModule } from '@ngrx/store';
import { ProductState } from '../../store/product.reducer';
import { PRODUCT_MOCK } from './../../../shared/constants/products.const';
import { Router } from '@angular/router';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;
  let store: Store<ProductState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [ ProductAddComponent ],
      providers: [ HttpHandler, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an addProduct action on submit', () => {
    const formValue = PRODUCT_MOCK;
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should navigate to the product list page after onDiscard', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.onDiscard();

    expect(navigateSpy).toHaveBeenCalledWith(['product/list']);
  });
});

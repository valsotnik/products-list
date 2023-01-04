import { PRODUCT_MOCK } from './../../../shared/constants/products.const';
/* tslint:disable:no-unused-variable */
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddComponent } from './product-add.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { ProductState } from '../../store/product.reducer';
import { addProduct } from '../../store/product.actions';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;
  let store: Store<ProductState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
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
    component.onSubmit({ value: formValue } as NgForm);
    expect(store.dispatch).toHaveBeenCalledWith(addProduct({ product: formValue }));
  });
});

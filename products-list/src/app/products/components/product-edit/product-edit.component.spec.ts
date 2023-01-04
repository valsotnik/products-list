/* tslint:disable:no-unused-variable */
import { FormsModule } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';

import { ProductEditComponent } from './product-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { reducer } from '../../store/product.reducer';
import * as fromActions from '../../store/product.actions';

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        StoreModule.forRoot({products: reducer})
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '123' }) }
          }
        }
      ],
      declarations: [ProductEditComponent]
    });

    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch the loadProduct action on init', () => {
    spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(fromActions.loadProduct({ id: '123' }));
  });

  it('should increment the quantity by 1 when incrementQuantity is called', () => {
    component.model = { id: 1, name: 'Test Product', price: 10, quantity: 2 };
    component.incrementQuantity();
    expect(component.model.quantity).toEqual(3);
  });

  it('should decrement the quantity by 1 when decrementQuantity is called', () => {
    component.model = { id: 1, name: 'Test Product', price: 10, quantity: 2 };
    component.decrementQuantity();
    expect(component.model.quantity).toEqual(1);
  });

  it('should dispatch the deleteProduct action if the quantity is 0 or less when onSubmit is called', () => {
    spyOn(store, 'dispatch');
    component.product = { id: 1, name: 'Test Product', description: 'Product 1 Description', price: '10', imageUrl: 'https://source.unsplash.com/1600x900/?product', quantity: 0 };
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should navigate to the product list page', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.onDiscard();

    expect(navigateSpy).toHaveBeenCalledWith(['product/list']);
  });
});







/* tslint:disable:no-unused-variable */
import { FormsModule } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { StoreModule, Store, select } from '@ngrx/store';

import { ProductEditComponent } from './product-edit.component';
import { Product } from './../../models/products';
import * as fromActions from '../../store/product.actions';
import { selectedProduct } from '../../store/product.selectors';

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({})
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
});






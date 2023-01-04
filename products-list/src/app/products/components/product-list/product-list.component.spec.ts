/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';

import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import * as fromActions from '../../store/product.actions';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { reducer } from './../../store/product.reducer';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: Store;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({products: reducer})
      ],
      providers: [
        ProductService,
        HttpClient,
        HttpHandler,
      ],
      declarations: [ProductListComponent]
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    service = TestBed.inject(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch a loadProducts action on init', () => {
    spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(fromActions.loadProducts());
  });

  it('should call the deleteProduct action on the store when deleteProduct is called', () => {
    spyOn(store, 'dispatch').and.callThrough();
    component.deleteProduct('1');
    expect(store.dispatch).toHaveBeenCalledWith(fromActions.deleteProduct({ id: '1' }));
  })
});

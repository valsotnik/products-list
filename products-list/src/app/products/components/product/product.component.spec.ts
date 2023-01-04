/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import * as fromActions from '../../store/product.actions';
import { reducer } from '../../store/product.reducer';
import { Router } from '@angular/router';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        StoreModule.forRoot({products: reducer}),
      ],
      declarations: [ ProductComponent ],
      providers: [ HttpHandler, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch the deleteProduct action when deleteProduct is called', () => {
    spyOn(store, 'dispatch').and.callThrough();;
    component.deleteProduct('1');
    expect(store.dispatch).toHaveBeenCalledWith(fromActions.deleteProduct({ id: '1' }));
  });

  it('should navigate to the product list page', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.navigateToListPage();

    expect(navigateSpy).toHaveBeenCalledWith(['product/list']);
  });
});

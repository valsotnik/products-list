import { Observable } from 'rxjs';
import { ProductState } from '../../store/product.reducer';
import { IProduct, Product } from './../../models/products';


import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from '@ngrx/store';
import * as fromActions from '../../store/product.actions';
import { selectedProduct, selectProducts } from '../../store/product.selectors';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProduct[]>;
  totalPrice: number;

  constructor(
    public router: Router,
    private store: Store<ProductState>) {}
    model: any = {};

  ngOnInit() {
    this.store.dispatch(fromActions.loadProducts());
    this.loadProducts();
    this.products$.subscribe(products => {
      this.totalPrice = products.reduce((acc, product) => acc + Number(product.price) * product.quantity, 0);
    });

    this.store
    .pipe(select(selectedProduct))
    .subscribe(
      product => (this.model = Object.assign(new Product(), product))
    );
  }

  loadProducts() {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  deleteProduct(id: string) {
    this.store.dispatch(fromActions.deleteProduct({ id }));
  }
}

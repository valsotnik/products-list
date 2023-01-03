import { Observable } from 'rxjs';
import { ProductState } from '../../store/product.reducer';
import { IProduct } from './../../models/products';


import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { select, Store } from '@ngrx/store';
import * as fromActions from '../../store/product.actions';
import { selectProducts } from '../../store/product.selectors';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProduct[]>;
  totalPrice: number;

  constructor(
    private productService: ProductService,
    public router: Router,
    private store: Store<ProductState>) {}

  ngOnInit() {
    this.store.dispatch(fromActions.loadProducts());
    this.loadProducts();
    this.products$.subscribe(products => {
      this.totalPrice = products.reduce((acc, product) => acc + Number(product.price) * product.quantity, 0);
    });
  }

  loadProducts() {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  deleteProduct(id: string) {
    this.store.dispatch(fromActions.deleteProduct({ id }));
  }
}

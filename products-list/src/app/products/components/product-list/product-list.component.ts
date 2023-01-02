import { Observable } from 'rxjs';
import { ProductState } from '../../store/product.reducer';
import { Product } from './../../models/products';


import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { select, Store } from '@ngrx/store';
import { loadProducts } from '../../store/product.actions';
import { selectProducts } from '../../store/product.selectors';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>

  constructor(
    private productService: ProductService,
    public router: Router,
    private store: Store<ProductState>) {}

  ngOnInit() {
    this.store.dispatch(loadProducts());
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        console.log("Product Deleted");
        this.ngOnInit();
      },
      error: err => console.error(err)
    };
    this.productService.deleteProduct(id).subscribe(productsObserver);
  }
}

import * as fromActions from '../../store/product.actions';
import { ProductState } from './../../store/product.reducer';
import { Store, select } from '@ngrx/store';
import { Product } from './../../models/products';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Observable, pipe } from "rxjs";
import { selectedProduct } from '../../store/product.selectors';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private store: Store<ProductState>
  ) {}

  ngOnInit() {
    this.store.dispatch(
      fromActions.loadProduct({ id: this.route.snapshot.paramMap.get("id")})
    );

    this.product$ = this.store.pipe(select(selectedProduct));
  }

  deleteProduct(id: string) {
    this.store.dispatch(fromActions.deleteProduct({ id }));
  }
}

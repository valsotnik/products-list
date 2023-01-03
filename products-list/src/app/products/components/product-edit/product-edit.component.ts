import { Update } from '@ngrx/entity';
import { updateProduct } from './../../store/product.actions';
import { ProductState } from './../../store/product.reducer';
import { select, Store } from '@ngrx/store';
import { IProduct, Product } from './../../models/products';
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

import { ActivatedRoute, Router } from "@angular/router";
import { loadProduct } from '../../store/product.actions';
import { selectedProduct } from '../../store/product.selectors';

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>
  ) {}
  model: any = {};

  ngOnInit() {
    this.store.dispatch(
      loadProduct({ id: this.route.snapshot.paramMap.get("id")})
    );

    this.store
      .pipe(select(selectedProduct))
      .subscribe(
        product => (this.model = Object.assign(new Product(), product))
      );
  }

  onSubmit() {
    const update: Update<IProduct> = {
      id: this.model.id,
      changes: this.model
}

    this.store.dispatch(updateProduct({ product: update}))
  }
}

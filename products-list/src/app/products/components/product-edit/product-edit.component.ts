import { Update } from '@ngrx/entity';
import { deleteProduct, updateProduct } from './../../store/product.actions';
import { ProductState } from './../../store/product.reducer';
import { select, Store } from '@ngrx/store';
import { IProduct, Product } from './../../models/products';
import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { loadProduct } from '../../store/product.actions';
import { selectedProduct } from '../../store/product.selectors';

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {
  product:IProduct;

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
        product => {
          this.product = product;
          this.model = Object.assign(new Product(), product);
          console.log(this.product);

        }
      );
  }

  incrementQuantity(): void {
    this.model.quantity = this.model.quantity + 1;
  }

  decrementQuantity(): void {
    this.model.quantity = this.model.quantity - 1;
  }

  onSubmit() {
    const update: Update<IProduct> = {
      id: this.model.id,
      changes: this.model
    };

    (Number(this.model.quantity) <= 0) ?
      this.store.dispatch(deleteProduct({id: this.product.id.toString()}))
      : this.store.dispatch(updateProduct({ product: update}))
  }
}

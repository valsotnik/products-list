import { addProduct } from './../../store/product.actions';
import { ProductState } from './../../store/product.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.scss"]
})
export class ProductAddComponent {
  constructor(private store: Store<ProductState>) {}

  onSubmit(f: NgForm) {
    this.store.dispatch(addProduct({product: f.value}))
  }
}

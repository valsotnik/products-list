import { addProduct } from './../../store/product.actions';
import { ProductState } from './../../store/product.reducer';
import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductAddComponent implements OnInit {
  public productForm: FormGroup;

  constructor(
    private store: Store<ProductState>,
    private fb: FormBuilder,
    private router: Router) {}

  public ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/)
      ]],
      quantity: ['', [
        Validators.required,
        Validators.min(1),
        Validators.pattern(/^[0-9]\d*$/)
      ]],
      imageUrl: ['', Validators.required]
    });

  }

  public onSubmit() {
    this.store.dispatch(addProduct({product: this.productForm.value}))
  }

  public onDiscard(): void {
		void this.router.navigate(['product/list']);
	}
}

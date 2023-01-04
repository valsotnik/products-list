import { Update } from '@ngrx/entity';
import { deleteProduct, updateProduct } from './../../store/product.actions';
import { ProductState } from './../../store/product.reducer';
import { select, Store } from '@ngrx/store';
import { IProduct, Product } from './../../models/products';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Self } from "@angular/core";
import { takeUntil } from 'rxjs/operators';

import { ActivatedRoute, Router } from "@angular/router";
import { loadProduct } from '../../store/product.actions';
import { selectedProduct } from '../../store/product.selectors';
import { OnDestroyService } from '../../services/on-destroy.service';

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ OnDestroyService ]
})
export class ProductEditComponent implements OnInit {
  public product: IProduct;
  public model: any = {};

  constructor(
    @Self() private readonly destroy$: OnDestroyService,
    private route: ActivatedRoute,
    private store: Store<ProductState>,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit() {
    this.store.dispatch(
      loadProduct({ id: this.route.snapshot.paramMap.get("id")})
    );

    this.store
      .pipe(
        select(selectedProduct),
        takeUntil(this.destroy$))
      .subscribe(
        product => {
          this.product = product;
          this.model = Object.assign(new Product(), product);
          this.cdr.detectChanges();
        }
      );



  }

  public incrementQuantity(): void {
    this.model.quantity = +this.model.quantity + 1;
  }

  public decrementQuantity(): void {
    this.model.quantity = this.model.quantity - 1;
  }

  public onSubmit() {
    const update: Update<IProduct> = {
      id: this.model.id,
      changes: this.model
    };

    (Number(this.model.quantity) <= 0) ?
      this.store.dispatch(deleteProduct({id: this.product.id.toString()}))
      : this.store.dispatch(updateProduct({ product: update}))
  }

  public onDiscard(): void {
		void this.router.navigate(['product/list']);
	}
}

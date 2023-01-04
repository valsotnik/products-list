import { Observable } from 'rxjs';
import { ProductState } from '../../store/product.reducer';
import { IProduct, Product } from './../../models/products';


import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from '@ngrx/store';
import * as fromActions from '../../store/product.actions';
import { selectedProduct, selectProducts } from '../../store/product.selectors';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  public products$: Observable<IProduct[]>;
  public totalPrice: number;

  constructor(
    public router: Router,
    private store: Store<ProductState>) {}
    model: any = {};

  public ngOnInit() {
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

  public loadProducts() {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  public deleteProduct(id: string) {
    this.store.dispatch(fromActions.deleteProduct({ id }));
  }

  public navigateToAddPage(): void {
		void this.router.navigate(['product/add']);
	}
}

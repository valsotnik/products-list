import * as fromActions from '../../store/product.actions';
import { ProductState } from './../../store/product.reducer';
import { Store, select } from '@ngrx/store';
import { Product } from './../../models/products';
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { selectedProduct } from '../../store/product.selectors';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  public product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<ProductState>
  ) {}

  public ngOnInit() {
    this.store.dispatch(
      fromActions.loadProduct({ id: this.route.snapshot.paramMap.get("id")})
    );

    this.product$ = this.store.pipe(select(selectedProduct));
  }

  public deleteProduct(id: string) {
    this.store.dispatch(fromActions.deleteProduct({ id }));
  }

  public navigateToListPage(): void {
		void this.router.navigate(['product/list']);
	}
}

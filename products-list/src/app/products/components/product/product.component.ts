import { loadProduct } from './../../store/product.actions';
import { ProductState } from './../../store/index';
import { Store, select } from '@ngrx/store';
import { Product } from './../../models/products';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, map } from "rxjs/operators";
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
      loadProduct({ id: this.route.snapshot.paramMap.get("id")})
    );

    this.product$ = this.store.pipe(select(selectedProduct));
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        console.log("Product Deleted");
        this.router.navigate(["/product/list"]);
      },
      error: err => console.error(err)
    };
    this.service.deleteProduct(id).subscribe(productsObserver);
  }
}

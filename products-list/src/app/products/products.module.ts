import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductService } from "./services/product.service";
import { StoreModule } from '@ngrx/store';
import * as fromProductState from './store';

@NgModule({
  declarations: [
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    StoreModule.forFeature(
      fromProductState.productStateFeatureKey,
      fromProductState.reducers,
      { metaReducers: fromProductState.metaReducers }
      )
    ],
  providers: [ProductService],
  exports: [
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent
  ]
})
export class ProductsModule {}

import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductService } from "./services/product.service";
import * as fromProduct from './store/product.reducer';
import { ProductEffects } from './store/product.effects';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

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
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromProduct.productsFeatureKey,
      fromProduct.reducer
    ),
    EffectsModule.forFeature([ProductEffects])
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

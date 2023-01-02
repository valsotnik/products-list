import { Product } from './../models/products';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[Product List Component] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product Effect] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product Effect] Load Products Failure',
  props<{ error: any }>()
);

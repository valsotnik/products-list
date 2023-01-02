import { loadProductsSuccess, loadProductsFailure } from './product.actions';
import { Product } from './../models/products';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';

export const productStateFeatureKey = 'productState';

export interface ProductState {
  products: Product[];
  error: any
}

export const initialState: ProductState = {
  products: undefined,
  error: undefined
};

export const reducers = createReducer(
  initialState,
  //@ts-ignore
  on(loadProductsSuccess, (state, action) => {
    return {
      products: action.products
    }
  }),
  on(loadProductsFailure, (state, action) => {
    return {
      products: state.products,
      error: action.error
    }
  })
);

export const selectProductsFeature = createFeatureSelector<ProductState>(productStateFeatureKey);

export const selectProducts = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.products
);


export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? []: [];

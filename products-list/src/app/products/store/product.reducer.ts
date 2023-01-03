import { Action, createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { IProduct } from './../models/products';
import * as ProductActions from "./product.actions";

export const productsFeatureKey = "products";

export interface ProductState extends EntityState<IProduct> {
  error: any;
  selectedProduct: IProduct;
}

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const initialState: ProductState = adapter.getInitialState({
  error: undefined,
  selectedProduct: undefined
});

const productReducer = createReducer(
  initialState,
  on(ProductActions.addProduct, (state, action) =>
    adapter.addOne(action.product, state)
  ),
  on(ProductActions.addProductSuccess, (state, action) =>
    adapter.addOne(action.product, state)
  ),
  on(ProductActions.addProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }}
  ),
  on(ProductActions.loadProductsSuccess, (state, action) =>
    adapter.addMany(action.products, state)
  ),
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }}
  ),
  on(ProductActions.loadProductSuccess, (state, action) => {
    return {
      ...state,
      selectedProduct: action.selectedProduct
    }}
  ),
  on(ProductActions.loadProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }}
  ),
  on(ProductActions.updateProduct, (state, action) =>
    adapter.updateOne(action.product, state)
  ),
  on(ProductActions.deleteProductSuccess, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ProductActions.deleteProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }}
  ),
);


export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

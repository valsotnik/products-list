import { PRODUCTS_ARRAY_MOCK, PRODUCT_MOCK } from './../../shared/constants/products.const';
import { adapter, ProductState, reducer } from './product.reducer';
import * as fromActions from './product.actions';
import { IProduct } from '../models/products';
import { Update } from '@ngrx/entity';

describe('Product Reducer', () => {
  let initialState: ProductState;

  beforeEach(() => {
    initialState = {
      ids: [],
      entities: {},
      error: undefined,
      selectedProduct: undefined
    };
  });

  it('should handle the addProduct action', () => {
    const product: IProduct = PRODUCT_MOCK;
    const newState = reducer(initialState, fromActions.addProduct({ product }));
    expect(newState.ids).toContain(product.id);
    expect(newState.entities[product.id]).toEqual(product);
  });

  it('should handle the addProductSuccess action', () => {
    const product: IProduct = PRODUCT_MOCK;
    const newState = reducer(initialState, fromActions.addProductSuccess({ product }));
    expect(newState.ids).toContain(product.id);
    expect(newState.entities[product.id]).toEqual(product);
  });

  it('should handle the addProductFailure action', () => {
    const error = 'Error adding product';
    const newState = reducer(initialState, fromActions.addProductFailure({ error }));
    expect(newState.error).toEqual(error);
  });

  it('should handle the loadProductsSuccess action', () => {
    const products: IProduct[] = PRODUCTS_ARRAY_MOCK;
    const newState = reducer(initialState, fromActions.loadProductsSuccess({ products }));
    expect(newState.ids).toEqual([1, 2]);
    expect(newState.entities).toEqual({
    1: PRODUCTS_ARRAY_MOCK[0],
    2: PRODUCTS_ARRAY_MOCK[1]
    });
  });

  it('should handle the loadProductsFailure action', () => {
    const error = 'Error loading products';
    const newState = reducer(initialState, fromActions.loadProductsFailure({ error }));
    expect(newState.error).toEqual(error);
  });

  it('should handle the loadProductSuccess action', () => {
    const product: IProduct = PRODUCT_MOCK;
    const newState = reducer(initialState, fromActions.loadProductSuccess({ selectedProduct: product }));
    expect(newState).toEqual({ ...initialState, selectedProduct: product });
  });

  it('should handle the loadProductFailure action', () => {
    const error = 'An error occurred';
    const newState = reducer(initialState, fromActions.loadProductFailure({ error }));
    expect(newState).toEqual({ ...initialState, error });
  });

  it('should handle the addProduct action', () => {
    const product: IProduct = PRODUCT_MOCK;
    const newState = reducer(initialState, fromActions.addProduct({ product }));
    expect(newState).toEqual(adapter.addOne(product, initialState));
  });

  it('should handle the addProductSuccess action', () => {
    const product: IProduct = PRODUCT_MOCK;
    const newState = reducer(initialState, fromActions.addProductSuccess({ product }));
    expect(newState).toEqual(adapter.addOne(product, initialState));
  });

    it('should handle the addProductFailure action', () => {
    const error = 'An error occurred';
    const newState = reducer(initialState, fromActions.addProductFailure({ error }));
    expect(newState).toEqual({ ...initialState, error });
  });

  it('should handle the loadProductsSuccess action', () => {
    const products: IProduct[] = PRODUCTS_ARRAY_MOCK;
    const newState = reducer(initialState, fromActions.loadProductsSuccess({ products }));
    expect(newState).toEqual(adapter.addMany(products, initialState));
  });

    it('should handle the loadProductsFailure action', () => {
    const error = 'An error occurred';
    const newState = reducer(initialState, fromActions.loadProductsFailure({ error }));
    expect(newState).toEqual({ ...initialState, error });
  });

  it('should handle the updateProduct action', () => {
    const product: Update<IProduct> = { id: 1, changes: { name: 'Updated Product' } };
    const newState = reducer(initialState, fromActions.updateProduct({ product }));
    expect(newState).toEqual(adapter.updateOne(product, initialState));
  });

    it('should handle the deleteProductSuccess action', () => {
    const id = '1';
    const newState = reducer(initialState, fromActions.deleteProductSuccess({ id }));
    expect(newState).toEqual(adapter.removeOne(id, initialState));
  });

    it('should handle the deleteProductFailure action', () => {
    const error = 'An error occurred';
    const newState = reducer(initialState, fromActions.deleteProductFailure({ error }));
    expect(newState).toEqual({ ...initialState, error });
  });
})

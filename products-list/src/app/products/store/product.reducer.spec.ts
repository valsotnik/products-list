// import { PRODUCTS_ARRAY_MOCK } from './../../shared/constants/products.const';
// import { Action, createReducer, on } from '@ngrx/store';
// import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
// import { IProduct } from './../models/products';
// import * as ProductActions from './product.actions';
// import { ProductState, adapter, initialState, reducer } from './product.reducer';
// import { PRODUCT_MOCK } from 'src/app/shared/constants/products.const';

// describe('Adapter methods', () => {

  // it('should return the initial state with getInitialState', () => {
  //   expect(adapter.getInitialState()).toEqual(initialState);
  // });

  // it('should add one item with addOne', () => {
  //   const product: IProduct = PRODUCT_MOCK;
  //   const state = adapter.addOne(product, initialState);

  //   expect(state).toEqual({
  //     ...initialState,
  //     entities: {
  //       1: product
  //     },
  //     ids: [1],
  //     error: undefined,
  //     selectedProduct: undefined
  //   });
  // });

  // it('should add many items with addMany', () => {
  //   const products: IProduct[] = PRODUCTS_ARRAY_MOCK;
  //   const state = adapter.addMany(products, initialState);

  //   expect(state).toEqual({
  //     ...initialState,
  //     entities: {
  //       1: products[0],
  //       2: products[1]
  //     },
  //     ids: [1, 2]
  //   });
  // });

  // it('should remove one item with removeOne', () => {
  //   const state = adapter.removeOne(1, {
  //     ...initialState,
  //     entities: {
  //       1: PRODUCT_MOCK
  //     },
  //     ids: [1]
  //   });

  //   expect(state).toEqual(initialState);
  // });

  // it('should update one item with updateOne', () => {
  //   const product: Update<IProduct> = PRODUCT_MOCK;
  //   const state = adapter.updateOne(product, {
  //     ...initialState,
  //     entities: {
  //       1: PRODUCT_MOCK
  //     },
  //     ids: [1]
  //   });

  //   expect(state).toEqual({
  //     ...initialState,
  //     entities: {
  //       1: product
  //     },
  //     ids: [1]
  //   });
  // });

  // it('should return ids with selectIds', () => {
  //   expect(adapter.selectId({
  //     ...initialState,
  //     id: 1
  //   })).toEqual([1]);
  // });

  // it('should return entities with selectEntities', () => {
  //   expect(adapter.selectEntities({
  //     ...initialState,
  //     entities: {
  //       1: { id: 1, name: 'Test Product 1' },
  //       2: { id: 2, name: 'Test Product 2' }
  //     }
  //   })).toEqual({
  //     1: { id: 1, name: 'Test Product 1' },
  //     2: { id: 2, name: 'Test Product 2' }
  //   });
  // });

  // it('should return all items with selectAll', () => {
  //   expect(adapter.selectAll({
  //     ...initialState,
  //     entities: {
  //       1: { id: 1, name: 'Test Product 1' },
  //       2: { id: 2, name: 'Test Product 2' }
  //     },
  //     ids: [1, 2]
  //   })).toEqual([
  //     { id: 1, name: 'Test Product 1' },
  //     { id: 2, name: 'Test Product 2' }
  //   ]);
  // });




// })

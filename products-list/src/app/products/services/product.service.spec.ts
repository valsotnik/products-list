import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { IProduct } from './../models/products';
import { PRODUCT_MOCK, PRODUCTS_ARRAY_MOCK } from 'src/app/shared/constants/products.const';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createProduct', () => {
    it('should create a new product', () => {
      const product: IProduct = PRODUCT_MOCK;

      service.createProduct(product).subscribe(result => {
        expect(result).toEqual(product);
      });

      const req = httpMock.expectOne(`http://localhost:3000/products/`);
      expect(req.request.method).toEqual('POST');
      req.flush(product);
    });
  });

  describe('getProducts', () => {
    it('should return a list of products', () => {
      const products: IProduct[] = PRODUCTS_ARRAY_MOCK;

      service.getProducts().subscribe(result => {
        expect(result).toEqual(products);
      });

      const req = httpMock.expectOne(`http://localhost:3000/products/`);
      expect(req.request.method).toEqual('GET');
      req.flush(products);
    });
  });

  describe('getProduct', () => {
    it('should return a single product', () => {
      const product: IProduct = PRODUCT_MOCK;

      service.getProduct('1').subscribe(result => {
        expect(result).toEqual(product);
      });

      const req = httpMock.expectOne(`http://localhost:3000/products/1`);
      expect(req.request.method).toEqual('GET');
      req.flush(product);
    });
  });

  describe('editProduct', () => {
    it('should update an existing product', () => {
      const changes: Partial<IProduct> = { name: 'Updated Product' };
      const product: IProduct = PRODUCT_MOCK;

      service.editProduct(1, changes).subscribe(result => {
        expect(result).toEqual(product);
      });

      const req = httpMock.expectOne(`http://localhost:3000/products/1`);
      expect(req.request.method).toEqual('PUT');
      req.flush(product);
    });
  });

  describe('deleteProduct', () => {
    it('should delete a product', () => {
      service.deleteProduct('1').subscribe();

      const req = httpMock.expectOne(`http://localhost:3000/products/1`);
      expect(req.request.method).toEqual('DELETE');
      req.flush({});
    });
  });
});

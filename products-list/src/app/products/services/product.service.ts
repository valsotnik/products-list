import { IProduct } from './../models/products';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  baseUrl: string = "http://localhost:3000/products/";

  createProduct(model: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseUrl, model);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl);
  }

  getProduct(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>(this.baseUrl + productId);
  }

  editProduct(productId: string| number, changes: Partial<IProduct>): Observable<IProduct> {
    return this.http.put<IProduct>(this.baseUrl + productId, changes);
  }

  deleteProduct(productId: number) {
    return this.http.delete(this.baseUrl + productId);
  }
}

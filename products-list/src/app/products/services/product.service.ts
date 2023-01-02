import { Product } from './../models/products';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  baseUrl: string = "http://localhost:3000/products/";

  createProduct(model: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, model);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(productId: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + productId);
  }

  editProduct(model: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + model.id, model);
  }

  deleteProduct(productId: number) {
    return this.http.delete(this.baseUrl + productId);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { product } from '../interfaces/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = 'http://localhost:5000';

  constructor( private Http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.Http.get<product[]>(`${this.BASE_URL}/product`);
  }
  getProduct(productID: string): Observable<product> {
    return this.Http.get<product>(`${this.BASE_URL}/product/${productID}`);
  }
  createProduct(product: product): Observable<product> {
    return this.Http.post<product>(`${this.BASE_URL}/product/create`,product);
  }
  deleteProduct(productID: string):Observable<product> {
    return this.Http.delete<product>(`${this.BASE_URL}/product/delete?productID=${productID}`);
  }
  editProduct(productID: string, product: product): Observable<product> {
    return this.Http.put<product>(`${this.BASE_URL}/product/edit?productID=${productID}`, product);
  }
}

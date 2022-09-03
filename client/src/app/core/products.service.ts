import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  endpoint: string = "https://velox-api-abdelrahman0w.vercel.app/products";
  Products: any[] = [];

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.endpoint);
    // return this.Products;
  }

  getProduct(id: number) {
    return this.Products.find((p) => p.id === id);
  }
}
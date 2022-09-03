import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private mainApp: AppComponent) { }

  getProducts() {
    return this.mainApp.allProducts;
  }

  getProduct(id: number) {
    return
  }
}
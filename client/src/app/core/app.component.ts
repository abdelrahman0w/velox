import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  title = 'client';
  allProducts: any[] = [];

  // cart: any = {};
  // cartProducts: any[] = [];

  newProduct: any = {
    "productID": "ADDED",
    "qty": 1
  };

  cartList: string[] = [];
  cart = this.cartList.length;
  wishList: string[] = [];
  wish = this.wishList.length;

  ngOnInit() {
    let headers = new HttpHeaders();

    this.http.get<any>('https://velox-api-abdelrahman0w.vercel.app/products', {
      headers: headers
    }).subscribe(data => {
      let products = data;
      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        this.allProducts.push(product);
      }
    });
  }
}

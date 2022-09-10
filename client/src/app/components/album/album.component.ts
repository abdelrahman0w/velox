import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  allProducts: any[] = [];
  cartList: any[] = [];
  cart = this.cartList.length;
  wishList: string[] = [];
  wish = this.wishList.length;

  @Input('cat') cat: string = '';
  @Input('search') search: string = '';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    let headers = new HttpHeaders();

    if (this.cat.length != 0) {
      this.http.get<any>('https://velox-api-abdelrahman0w.vercel.app/products', {
        headers: headers
      }).subscribe(data => {
        let products = data;
        for (let i = 0; i < products.length; i++) {
          let product = products[i];
          this.allProducts.push(product);
          this.allProducts = this.allProducts.filter(prod => prod.category == this.cat);
        }
      });
    } else if (this.search.length != 0) {
      this.http.get<any>('https://velox-api-abdelrahman0w.vercel.app/products/find/' + this.search, {
        headers: headers
      }).subscribe(data => {
        let products = data;
        for (let i = 0; i < products.length; i++) {
          let product = products[i];
          this.allProducts.push(product);
        }
      });
    } else {
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

    this.loadCart();
  }

  scs: boolean = false;
  showSuccess() {
    setTimeout(() => {
      this.scs = true;
    }, 1000);
    this.scs = false;
  }

  loadCart() {
    this.cartList = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }

  saveCart() {
    localStorage.setItem('cart_items', JSON.stringify(this.cartList))
  }

  inCart(prod: any) {
    return this.cartList.findIndex((x: any) => x._id === prod._id) > -1;
  }

  add(prod: any) {
    this.showSuccess();
    if (!this.inCart(prod)) {
      prod.qty = 1;
      this.cartList.push(prod);
      this.saveCart();
    }
  }

  decQuantity(_id: string) {
    var foundIndex = this.allProducts.findIndex(prod => prod._id == _id);
    var tempQty = this.allProducts[foundIndex].qty;
    this.allProducts[foundIndex].qty = 1;
    this.cartList.push(this.allProducts[foundIndex]);
    this.saveCart();
    this.allProducts[foundIndex].qty = tempQty - 1;
    this.cart++;
  }

  isInWishList(_id: string) {
    return this.wishList.includes(_id);
  }
  addWish(_id: string) {
    this.wishList.push(_id);
    this.wish++;
  }
  removeWish(_id: string) {
    this.wishList = this.wishList.filter(prod => prod != _id);
    this.wish--;
  }
}

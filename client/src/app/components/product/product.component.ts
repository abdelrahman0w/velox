import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public href: string = "";
  public prodID: string = "";
  public prod: any = {};
  link: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.prodID = this.href.split("/")[2];
    let headers = new HttpHeaders();
    this.http.get<any>('https://velox-api-abdelrahman0w.vercel.app/products/' + this.prodID, {
      headers: headers
    }).subscribe(data => {
      this.prod = data;

      let categoriesMap: { [key: string]: string } = {
        "women's clothing": 'women',
        "men's clothing": 'men',
        'jewelery': "jewelery",
        'electronics': "electronics"
      }

      this.link = categoriesMap[this.prod.category]
    });

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

  removeProd(prod: any) {
    var ind = this.cartList.findIndex((x: any) => x._id === prod.id);

    if (ind > -1) {
      this.cartList.splice(ind, 1);
      this.saveCart()
    }
  }

  add(prod: any) {
    this.showSuccess();
    if (!this.inCart(prod)) {
      prod.qty = 1;
      this.cartList.push(prod);
      this.saveCart();
    }
  }

  cartList: string[] = []
  cart = this.cartList.length;
  wishList: string[] = [];
  wish = this.wishList.length;

  decQuantity(_id: string) {
    this.cartList.push(this.prod._id);
    this.prod.qty--;
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

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

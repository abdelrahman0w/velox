import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public href: string = "";
  public prodID: string = "";
  public prod: any = {};

  constructor(private router: Router, private prodsService: ProductsService) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.prodID = this.href.substring(9);
    this.prod = this.prodsService.getProduct(parseInt(this.prodID));
  }

  cart = 0;
  wishList: number[] = [];
  wish = this.wishList.length;
  isInWishList(id: number) {
    return this.wishList.includes(id);
  }
  decQuantity(id: number) {
    this.prod.qty--;
    this.cart++;
  }
  addWish(id: number) {
    this.wishList.push(id);
    this.wish++;
  }
  removeWish(id: number) {
    this.wishList = this.wishList.filter(prod => prod != id);
    this.wish--;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prod = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    discount: 85,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    qty: 15,
    new: true,
    rating: {
      rate: 3.9,
      count: 120,
    }
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

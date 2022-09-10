import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor() { }

  items: any[] = [];

  total: number = 0;

  ngOnInit(): void {
    this.loadCart();
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].discount) {
        this.total += this.items[i].price * this.items[i].qty * (1 - (this.items[i].discount || 0) / 100);
      }
      else {
        this.total += this.items[i].price * this.items[i].qty;
      }
    }
  }

  saveCart() {
    localStorage.setItem('cart_items', JSON.stringify(this.items))
  }

  loadCart() {
    this.items = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }

  checkout() {
    this.items = [];
    this.total = 0;
    localStorage.clear();
  }

  removeItem(_id: string) {
    var foundIndex = this.items.findIndex(prod => prod._id == _id);
    var itemDiscount = this.items[foundIndex].discount || 0;
    var itemTotalPrice = this.items[foundIndex].price * this.items[foundIndex].qty * (1 - itemDiscount / 100);
    this.total -= itemTotalPrice;
    this.items.splice(foundIndex, 1);
    this.saveCart();
  }

  decQuantity(_id: string) {
    var foundIndex = this.items.findIndex(prod => prod._id == _id);
    this.items[foundIndex].qty--;

    if (this.items[foundIndex].discount) {
      this.total -= this.items[foundIndex].price * (1 - (this.items[foundIndex].discount || 0) / 100);
    }
    else {
      this.total -= this.items[foundIndex].price;
    }

    if (this.items[foundIndex].qty == 0) {
      this.removeItem(_id);
    }

    this.saveCart();
  }

  incQuantity(_id: string) {
    var foundIndex = this.items.findIndex(prod => prod._id == _id);
    this.items[foundIndex].qty++;

    if (this.items[foundIndex].discount) {
      this.total += this.items[foundIndex].price * (1 - (this.items[foundIndex].discount || 0) / 100);
    }
    else {
      this.total += this.items[foundIndex].price;
    }

    this.saveCart();
  }

  clearCart() {
    this.items = [];
    this.total = 0;
    localStorage.clear();
  }

}

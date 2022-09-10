import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartProdsService {

  items: any[] = [];

  constructor() { }

  getItem() {
    return this.items;
  }

  saveCart() {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }

  addItem(item: any) {
    this.items.push(item);
    this.saveCart();
  }

  loadCart() {
    this.items = JSON.parse(localStorage.getItem('cart_items') as any) || [];
    return this.items;
  }

  isInCart(item: any) {
    return this.items.findIndex((x: any) => x._id === item._id) > -1;
  }

  removeItem(item: any) {
    const ind = this.items.findIndex((x: any) => x._id === item._id);
    if (ind > -1) {
      this.items.splice(item, 1);
      this.saveCart()
    }
  }

  clearCart() {
    localStorage.clear()
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  allProducts: any[] = [];
  cart: any[] =[];
  items = 0
  wishList: number[] = [];
  wish = this.wishList.length;
  @Output() itemsEmitter = new EventEmitter<number>();

  constructor(private prodsService: ProductsService, private http: HttpClient ) { }
  ngOnInit(): void {
    this.allProducts = this.prodsService.getProducts();
  }


  decQuantity(id: number) {
    var foundIndex = this.allProducts.findIndex(prod => prod.id == id);
    this.allProducts[foundIndex].qty--;
    this.cart.push(this.allProducts[foundIndex]);
    this.items++;
    this.itemsEmitter.emit(this.items);
    
  }


  isInWishList(id: number) {
    return this.wishList.includes(id);
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
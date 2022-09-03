import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/core/app.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  allProducts: any[] = [];
  cart = 0;
  wishList: string[] = [];
  wish = this.wishList.length;

  constructor(private mainApp: AppComponent) { }
  ngOnInit(): void {
    this.allProducts = this.mainApp.allProducts;
  }

  decQuantity(_id: string) {
    var foundIndex = this.allProducts.findIndex(prod => prod._id == _id);
    this.allProducts[foundIndex].qty--;
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
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  allProducts: any[] = [];
  cart = 0;
  wishList: number[] = [];
  // get number of elements in wishList
  wish = this.wishList.length;

  constructor(private prodsService: ProductsService) { }
  ngOnInit(): void {
    this.allProducts = this.prodsService.getProducts();
  }

  decQuantity(id: number) {
    var foundIndex = this.allProducts.findIndex(prod => prod.id == id);
    this.allProducts[foundIndex].qty--;
    this.cart++;
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

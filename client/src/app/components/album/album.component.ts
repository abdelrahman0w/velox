import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/product';
import { ProductsService } from 'src/app/core/products.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  allProducts: IProduct[] = [];
  cart = 0;
  wishList: string[] = [];
  // get number of elements in wishList
  wish = this.wishList.length;

  constructor(private prodsService: ProductsService) { }
  ngOnInit(): void {
    this.prodsService.getProducts().subscribe((data) => { this.allProducts = data; });
    console.log(this.allProducts);
    
  }

  decQuantity(id: string) {
    var foundIndex = this.allProducts.findIndex(prod => prod._id == id);
    this.allProducts[foundIndex].qty--;
    this.cart++;
  }
  isInWishList(id: string) {
    return this.wishList.includes(id);
  }
  addWish(id: string) {
    this.wishList.push(id);
    this.wish++;
  }
  removeWish(id: string) {
    this.wishList = this.wishList.filter(prod => prod != id);
    this.wish--;
  }
}
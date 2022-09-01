import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items: number = 0;

  ngOnChanges(): void {
  }

}

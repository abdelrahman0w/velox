import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-cat',
  templateUrl: './single-cat.component.html',
  styleUrls: ['./single-cat.component.css']
})
export class SingleCatComponent implements OnInit {

  constructor(private router: Router) { }

  public href: string = '';
  public category: string = '';

  categoriesMap: { [key: string]: string } = {
    'women': "women's clothing",
    'men': "men's clothing",
    'jewelery': "jewelery",
    'electronics': "electronics"
  }

  filtered: string = '';

  ngOnInit(): void {
    this.href = this.router.url;
    this.category = this.href.split("/")[2];
    this.filtered = this.categoriesMap[this.category];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  items: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  updateItems(items: number) {
    this.items = items;
  }
}

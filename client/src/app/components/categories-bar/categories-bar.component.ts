import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.css']
})
export class CategoriesBarComponent implements OnInit {

  constructor() { }

  @Input('active') active: string = ''

  ngOnInit(): void {
  }

  isActive(id: number) {
    const map: { [key: number]: string } = {
      0: 'women',
      1: 'men',
      2: 'jewelery',
      3: 'electronics'
    }
    return map[id] == this.active
  }
}

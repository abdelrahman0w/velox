import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  constructor() {}

  ngOnInit(): void {
  }

  @Input() cart: number = 0;

  @Input() wish: number = 0;

  ngOnChanges(): void {
  }

}

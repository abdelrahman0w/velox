import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crumb-nav',
  templateUrl: './crumb-nav.component.html',
  styleUrls: ['./crumb-nav.component.css']
})
export class CrumbNavComponent implements OnInit {

  // @Input() crumbs: string[] = [];

  @Input() crnt: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

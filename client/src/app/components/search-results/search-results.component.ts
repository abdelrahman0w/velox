import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public href: string = '';
  public search: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.search = this.href.split("/")[2];
  }

}

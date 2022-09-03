import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  public href: string = "";
  public prodID: string = "";

  @Input() product: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.prodID = this.href.substring(9);
  }

}


import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  public href: string = "";
  public prodID: string = "";

  constructor(private router: Router, private prodsService: ProductsService) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.prodID = this.href.substring(9);
  }

  public product:any = this.prodsService.getProduct(parseInt(this.prodID));
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singlepage-product',
  templateUrl: './singlepage-product.component.html',
  styleUrls: ['./singlepage-product.component.css']
})
export class SinglepageProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product={
    name:"Nonstick Dishwasher PFOA",
    price:70.00,
    sale: 80.00,
     rate : 5,
     decription:"eget velit. Donec ac tempus ante. Fusce ultricies massa massa.Fusce aliquam, purus eget sagittis vulputate, sapien liberohendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in ",
    review:111,
    Availability:180,
    Category:"clothing",
    totalDescription:" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the passages, and more recently with deskto"
    }
}

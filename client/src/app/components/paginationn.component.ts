import { Component, OnInit } from '@angular/core';

import { ServiesService } from '../servies.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-paginationn',
  templateUrl: './paginationn.component.html',
  styleUrls: ['./paginationn.component.css']
})
export class PaginationnComponent implements OnInit {

  constructor(private servicess:ServiesService) { }
  pageSize:number=20

  currentPage:number=1
     
  showproduct:any[] =[];
  
  ngOnInit(): void {
    this.servicess.getAllProduct().subscribe({next:(data)=>{
      console.log(data);
      this.showproduct=data.length;
      
      
    }})



  }

  onPageChange(pageData:PageEvent){
    this.currentPage=pageData.pageIndex+1;
    this.servicess.getAllProduct(this.currentPage).subscribe({next:(data)=>{
      console.log(data);
      this.showproduct=data.length;
      
      
    }})

  }
}

import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-sidemenue',
  templateUrl: './sidemenue.component.html',
  styleUrls: ['./sidemenue.component.css']
})
export class SidemenueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  action1:string="Home";
  action2:string="Login";
  action3:string="setting"
  action4:string="logout"
  action5:string="perm_phone_msg"
  action6:string="shopping_cart"
  action7:string="production_quantity_limits"
  
  

  @Output() sidenavClose = new EventEmitter();
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }




  @Output() public sidenavToggle = new EventEmitter();
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
 





}

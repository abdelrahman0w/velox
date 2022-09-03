import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() user: boolean = true;

  @Input() username: string = "User";

  @Input() cart: number = 0;

  @Input() wish: number = 0;

  @Output() searchEmitter = new EventEmitter<string>();

  ngOnChanges(): void {
  }  
  
  private _searchValue:string='';


  get searchValue():string{
    return this._searchValue
  }


  set searchValue(value:string){
    this._searchValue = value;
    this.searchEmitter.emit(this._searchValue);
  };

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormGroup|any;
  constructor() { }

  ngOnInit(): void {
    this.register = new FormGroup({
      'email': new FormControl(''),
      'password': new FormControl(''),
      'confirmPassword': new FormControl('')
    });
  }

  regiserData(register:FormGroup){
    console.log(this.register.value);
  }

}

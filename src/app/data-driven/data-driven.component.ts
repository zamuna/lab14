import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  myformGrp:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.myformGrp=formBuilder.group({
      'username':['Zamuna'],
      'email':['example@a.com'],
      'post':['Post here']
    });
  }

  ngOnInit() {
  }

}

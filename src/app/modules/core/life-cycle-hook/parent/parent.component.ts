import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  input_1 :string = 'input from parent'
  counter:number = 0
  user:UserModel = {id:1,name:'karan'}
  constructor() { 
    /* 
      Injecting any services
      Initialize the fields
      Do not perform any api logic here
    */
    console.log('parent comp constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent comp OnChanges',changes);
  }

  ngOnInit(): void {
    /* 
      Perform the component specific operation Like:
        Making call to the API for page load
        any logic that you need to perform at very first as the component get instantiated
    */
    console.log('parent comp OnInit');
  }
  ngDoCheck(): void {
    console.log('parent comp DoCheck');
  }
  countIncrement(){
    this.counter++
    this.user.name = 'Karan Duggal'
  }

}

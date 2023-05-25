import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges {
  input_1 :string = 'input from parent'
  counter:number = 0
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
  countIncrement(){
    this.counter++
  }

}

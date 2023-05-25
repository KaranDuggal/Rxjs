import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges {
  input_1 :string = 'input from parent'
  counter:number = 0
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent comp OnChanges');
  }

  ngOnInit(): void {
    console.log('parent comp OnInit');
    
  }
  countIncrement(){
    this.counter++
  }

}

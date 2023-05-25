import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() input_1:string = ''
  @Input() counter!:number
  constructor() { 
    console.log('child comp constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child comp OnChanges',changes);
  }

  ngOnInit(): void {
    console.log('child comp OnInit');
  }

}

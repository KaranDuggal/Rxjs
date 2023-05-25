import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() input_1:string = ''
  @Input() counter!:number
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child changes obj', changes)
    console.log('child comp OnChanges');
  }

  ngOnInit(): void {
    console.log('child comp OnInit');
  }

}

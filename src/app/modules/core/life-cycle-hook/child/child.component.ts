import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() input_1:string = ''
  @Input() counter!:number
  @Input() user!:UserModel
  constructor() { 
    console.log('child comp constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child comp OnChanges',changes);
  }

  ngOnInit(): void {
    console.log('child comp OnInit');
  }

  ngDoCheck(): void {
    console.log('child comp DoCheck');
  }
}

import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges {

  @ViewChild('text') text:string = ''
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent comp OnChanges');
  }

  ngOnInit(): void {
    console.log('parent comp OnInit');
    
  }

}

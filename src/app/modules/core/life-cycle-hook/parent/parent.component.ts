import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  input_1 :string = 'input from parent'
  counter:number = 0
  user:UserModel = {id:1,name:'karan'}
  @ViewChild('btnCounter') btnCounter!:ElementRef
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
  console.log('btnCounter', this.btnCounter)
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

  ngAfterContentInit(): void {
    console.log('parent comp AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('parent comp AfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.btnCounter.nativeElement.innerHTML = 'Updates text'
    console.log('parent comp AfterViewInit',this.btnCounter);
  }
}

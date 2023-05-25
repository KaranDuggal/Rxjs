import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserModel } from '../user.model';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  @ContentChild(UserComponent) userComp! :UserComponent;
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

  ngAfterContentInit(): void {
    console.log('child comp AfterContentInit '+this.userComp.userName);
  }

  ngAfterContentChecked(): void {
    console.log('child comp AfterContentChecked '+this.userComp.userName);
  }

  ngAfterViewInit(): void {
    console.log('child comp AfterViewInit');
  }
}

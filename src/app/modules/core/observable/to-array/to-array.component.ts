import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  constructor() { }
  sourceSub:Subscription|undefined;
  
  ngOnInit(): void {
    const source = interval(1000);
    this.sourceSub = source.pipe().subscribe((res)=>{
      console.log('res', res);
      // if(res >= 8){
      //   this.sourceSub?.unsubscribe()
      // }
    })
  }

}

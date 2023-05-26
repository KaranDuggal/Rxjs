import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  obsSubscription!:Subscription
  obsSubscription2!:Subscription
  myColor:string = ''
  constructor(
    private designUtilityService:DesignUtilityService
  ) { }

  ngOnInit(): void {
    const arr= ['Karan','Duggal','Linux','Windows','Mac',]

    this.obsSubscription = interval(1000).pipe(
      tap(data =>{
        if(data === 4) this.obsSubscription?.unsubscribe()
      }),
      map(data=>{
        // if(data === 4) this.obsSubscription?.unsubscribe()
        return arr[data]
      }),
      take(arr.length)
    ).subscribe(res=>{
      this.designUtilityService.print(res,'tap')
    })

    const colorArr = ['aqua' ,'red' ,'gray' ,'green' ,'greenyellow' ,'palevioletred' ,'blue' ,'blueviolet' ,'burlywood']
    this.obsSubscription2 = interval(1000).pipe(
      tap(data =>{
        this.myColor = colorArr[data]
        if(data === colorArr.length - 1) this.obsSubscription2?.unsubscribe()
      }),
      map(data=>colorArr[data]),
      take(colorArr.length)
    ).subscribe(res=>{
      this.designUtilityService.print(res,'tapColor')
    })
    
  }

}

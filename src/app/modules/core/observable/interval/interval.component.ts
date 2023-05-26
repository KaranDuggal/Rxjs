import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMsg:any
  videoSubscriptionWithInterval!:Subscription
  videoSubscriptionWithTimer!:Subscription
  constructor(
    private designingUtilityServices:DesignUtilityService
  ) { }

  ngOnInit(): void {
    const broadCastVideosWithInterval = interval(1000)
    const broadCastVideosWithTimer = timer(5000,1000) // timer(delay for start subscription,delay in subscription)
    this.videoSubscriptionWithInterval =  broadCastVideosWithInterval.subscribe(res=>{
      this.obsMsg = 'Video '+res
      this.designingUtilityServices.print(this.obsMsg,"streamWithInterval")
      if(res >= 5) this.videoSubscriptionWithInterval?.unsubscribe()
    })
    this.videoSubscriptionWithTimer =  broadCastVideosWithTimer.subscribe(res=>{
      this.obsMsg = 'Video '+res
      this.designingUtilityServices.print(this.obsMsg,"streamWithTimer")
      if(res >= 5) this.videoSubscriptionWithTimer?.unsubscribe()
    })
  }

}

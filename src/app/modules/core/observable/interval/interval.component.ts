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
  videoSubscription:Subscription|undefined
  constructor(
    private designingutilityServices:DesignUtilityService
  ) { }

  ngOnInit(): void {
    // const broadCastVideos = interval(2000)
    // timer(delay,interval)
    const broadCastVideos = timer(5000,1000)

    this.videoSubscription =  broadCastVideos.subscribe(res=>{
      this.obsMsg = 'Video '+res
      this.designingutilityServices.print(this.obsMsg,"stream")
      
      if(res >= 5){
        this.videoSubscription?.unsubscribe()
      }
      
    })
  }

}

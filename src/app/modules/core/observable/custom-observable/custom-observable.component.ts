import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  customObserverManualStatus:'Error'|'Complete'|undefined
  customObserverIntervalStatus:'Error'|'Complete'|undefined
  sub2:Subscription|undefined
  constructor(
    private designUtilityService: DesignUtilityService
  ) { }

  ngOnInit(): void {
    const cusObs1 = Observable.create((observer:any)=>{
      setTimeout(() => {
        observer.next('Data emit 1')
      }, 1000);
      setTimeout(() => {
        observer.next('Data emit 2')
        // observer.complete()
      }, 2000);
      setTimeout(() => {
        observer.next('Data emit 3')
        observer.error('Limit cross')
      }, 3000);
      setTimeout(() => {
        observer.next('Data emit 4')
      }, 4000);
    })
    cusObs1.subscribe((res:any)=>{
      this.designUtilityService.print(res,'customObserverManual')
    },()=>{
      this.customObserverManualStatus = 'Error'
    },()=>{
      this.customObserverManualStatus = 'Complete'
    })
    const cusObs2 = Observable.create((observer:any)=>{
      let count = 1
      setInterval(()=>{
        observer.next('Data emit '+count)
        if(count === 5) observer.complete()
        // if(count === 4) observer.error('error hai')
        count++
      },1000)
    })
    this.sub2 = cusObs2.subscribe((res:any)=>{
      this.designUtilityService.print(res,'customObserverInterval')
    },()=>{
      this.customObserverIntervalStatus='Error'
    },()=>{
      this.customObserverIntervalStatus='Complete'
    })
  }
  ngOnDestroy(): void {
    this.sub2?.unsubscribe()
  }
}

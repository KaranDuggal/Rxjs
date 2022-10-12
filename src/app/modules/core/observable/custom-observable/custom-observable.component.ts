import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {
  customObserverManualStatus:'Error'|'Complete'|undefined
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
  }

}

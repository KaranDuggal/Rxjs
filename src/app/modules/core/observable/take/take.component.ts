import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';
import { take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(
    private designUtilityService:DesignUtilityService
  ) { }

  ngOnInit(): void {
    interval(1000).pipe(
      take(5)
    ).subscribe((res)=>{
      this.designUtilityService.print(res,'take')

    })
    interval(1000).pipe(
      take(10),
      takeLast(5)
    ).subscribe((res)=>{
      this.designUtilityService.print(res,'takeLast')
    })
    let condition_1 = timer(5000)
    let condition_2 = fromEvent(document,'click')
    interval(1000).pipe(
      // take(10),
      takeUntil(condition_2)
    ).subscribe((res)=>{
      this.designUtilityService.print(res,'takeUntil')
    })
  }

}

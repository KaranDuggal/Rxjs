import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  constructor(
    private designUtilityService:DesignUtilityService
  ) { }
  intervalSourceSub:Subscription|undefined;
  ofSourceSub:Subscription|undefined;
  fromSourceSub:Subscription|undefined;
  
  ngOnInit(): void {
    let sourceFromInterval = interval(1000);
    this.intervalSourceSub = sourceFromInterval.pipe(take(5),toArray()).subscribe((res)=>{
      res.forEach(e=>{
        let data = `ele ${e}`
        this.designUtilityService.print(data,'toArrayWithInterval')
      })
    })
    let sourceFromOf = of('Karan','duggal');
    this.intervalSourceSub = sourceFromOf.pipe(toArray()).subscribe((res)=>{
      res.forEach(e=>{
        this.designUtilityService.print(e,'toArrayWithOf')
      })
    })
    let sourceFromFrom = from(['Karan','duggal','linux','windows','mac','android']);
    this.fromSourceSub = sourceFromFrom.pipe(take(5),toArray()).subscribe((res)=>{
      res.forEach(e=>{
        this.designUtilityService.print(e,'toArrayWithFrom')
      })
    })
  }

}

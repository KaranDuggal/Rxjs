import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';
import { arrOfString } from 'src/app/utils/data';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private designUtilityService : DesignUtilityService) { }

  ngOnInit(): void {
    // Ex-1
    const source1 = from(arrOfString).pipe(
      map(res=> this.getData(res))
    ).subscribe(res=>res.subscribe(res=>{
      this.designUtilityService.print(res,'map')
    }))
    // Ex-2 | map + switchAll
    const source2 = from(arrOfString).pipe(
      map(res=> this.getData(res)),
      switchAll()
    ).subscribe(res=>{
      this.designUtilityService.print(res,'mapPlusSwitchAll')
    })
    // Ex-2 | mapMerge
    const source3 = from(arrOfString).pipe(
      switchMap(res=> this.getData(res))
    ).subscribe(res=>{
      this.designUtilityService.print(res,'switchMap')
    })
  }
  getData(data:string){
    return of(data+' video uploaded').pipe(delay(1000))
  }
}

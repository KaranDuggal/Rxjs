import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';
import { arrOfString } from 'src/app/utils/data';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(
    private designUtilityService : DesignUtilityService
  ) { }

  ngOnInit(): void {
    // Ex-1
    from(arrOfString).pipe(
      map(res=> this.getData(res))
    ).subscribe(res=>res.subscribe(res=>{
      this.designUtilityService.print(res,'map')
    }))
    // Ex-2 | concat + concatAll
    from(arrOfString).pipe(
      map(res=> this.getData(res)),
      concatAll()
    ).subscribe(res=>{
      this.designUtilityService.print(res,'mapPlusConcatAll')
    })
    // Ex-2 | concatAll
    from(arrOfString).pipe(
      concatMap(res=> this.getData(res))
      // mergeMap(res=> this.getData(res))
    ).subscribe(res=>{
      this.designUtilityService.print(res,'concatAll')
    })
  }
  getData(data:string){
    return of(data+' video uploaded').pipe(delay(1000))
  }
}

 import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';
 import { arrOfString } from "src/app/utils/data";

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(
    private designUtilityService : DesignUtilityService
  ) { }

  ngOnInit(): void {
    // Ex-1
    const source1 = from(arrOfString).pipe(
      map(res=> this.getData(res))
    ).subscribe(res=>res.subscribe(res=>{
      this.designUtilityService.print(res,'map')
    }))
    // Ex-2 | merge + mergeAll
    const source2 = from(arrOfString).pipe(
      map(res=> this.getData(res)),
      mergeAll()
    ).subscribe(res=>{
      this.designUtilityService.print(res,'mapPlusMergeAll')
    })
    // Ex-2 | mapMerge
    const source3 = from(arrOfString).pipe(
      mergeMap(res=> this.getData(res))
    ).subscribe(res=>{
      this.designUtilityService.print(res,'mergeAll')
    })
  }
  getData(data:string){
    return of(data+' video uploaded')
  }
}

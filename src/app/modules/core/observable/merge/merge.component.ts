import { Component, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(
    private designUtilityService : DesignUtilityService
  ) { }

  ngOnInit(): void {
    const sourceTechChannel = interval(1000).pipe(
      take(5),
      map(v=>`techChannel video No ${v+1}`)
    )
    sourceTechChannel.subscribe(res=>{
      this.designUtilityService.print(res,'techChannel')
    })
    const sourceDragonBallZChannel = interval(1050).pipe(
      take(3),
      map(v=>`dragonBallZChannel video No ${v+1}`)
    )
    sourceDragonBallZChannel.subscribe(res=>{
      this.designUtilityService.print(res,'dragonBallZChannel')
    })
    const sourceLinuxChannel = interval(1150).pipe(
      take(4),
      map(v=>`linuxChannel video No ${v+1}`)
    )
    sourceLinuxChannel.subscribe(res=>{
      this.designUtilityService.print(res,'linuxChannel')
    })
    
    merge(sourceTechChannel,  
      sourceDragonBallZChannel,  
      sourceLinuxChannel).subscribe(res=>{
      this.designUtilityService.print(res,'finalData')
    })
  }

}

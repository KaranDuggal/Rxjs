import { Component, OnInit } from '@angular/core';
import { concat, interval, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {
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
    
    concat(sourceTechChannel,  
      sourceDragonBallZChannel,  
      sourceLinuxChannel).subscribe(res=>{
      this.designUtilityService.print(res,'finalData')
    })
  }

}

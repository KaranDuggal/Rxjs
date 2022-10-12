import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  mapEx1Sub:Subscription|undefined
  mapEx2Sub:Subscription|undefined
  constructor(
    private designUtilityService:DesignUtilityService
  ) { }

  ngOnInit(): void {
    const mapEx1 = interval(1000)
    this.mapEx1Sub = mapEx1.pipe(
      map((data)=> {
        return 'video No ' + data
      })
    ).subscribe((res:any)=>{
      this.designUtilityService.print(res,'mapEx1')
    })
    this.mapEx2Sub = mapEx1.pipe(
      map((data)=> {
        return `8 x ${data} = ${data * 8}`
      })
    ).subscribe((res:any)=>{
      this.designUtilityService.print(res,'mapEx2')
    })
    setTimeout(() => {      
      this.mapEx1Sub?.unsubscribe()
      this.mapEx2Sub?.unsubscribe()
    }, 11000);

    const member = from([
      { id:1,name:'Name 1'},
      { id:2,name:'Name 2'},
      { id:3,name:'Name 3'},
      { id:4,name:'Name 4'},
      { id:5,name:'Name 5'},
      { id:6,name:'Name 6'},
      { id:7,name:'Name 7'},
      { id:8,name:'Name 8'},
      { id:9,name:'Name 9'},
    ])
    member.pipe(
      map(data=>{
        return data.name
      })
    ).subscribe((res:any)=>{
      this.designUtilityService.print(res,'mapEx3')
    })
  }

}

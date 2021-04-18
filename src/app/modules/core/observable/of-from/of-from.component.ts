import { Component, OnInit } from '@angular/core';
import {DesignUtilityService} from 'src/app/services/design-utility/design-utility.service'
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMsg:any
  constructor(
    private designUtilityService:DesignUtilityService
  ) { }

  ngOnInit(): void {

    // of
    const obs1  = of('duggal','karan'); 
    obs1.subscribe(res=>{
      this.designUtilityService.print(res,'of')  
    })
    const obs2  = of({a:'duggal',b:'karan'}); 
    obs2.subscribe(res=>{
      this.obsMsg = res
    })

    // from
    const obs3  = from(['duggal','karan']); 
    obs3.subscribe(res=>{
       this.designUtilityService.print(res,'fromArray')  

    })

    const promise = new Promise(resolve=>{
      setTimeout(()=>{
        // resolve('promise resolve')
      },3000);
    })
    
    // const obs4  = from(['duggal','karan']); 
    const obs4  = from(promise); 
    obs4.subscribe(res=>{
       this.designUtilityService.print(res,'Promise')  
    })
    // const obs4  = from(['duggal','karan']); 
    const obs5  = from('Anguler tutorial on uxtrens'); 
    obs5.subscribe(res=>{
      console.log('res', res)
       this.designUtilityService.print(res,'String')  
    })
  }

}

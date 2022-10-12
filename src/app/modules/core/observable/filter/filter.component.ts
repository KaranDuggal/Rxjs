import { Component, OnInit } from '@angular/core';
import { from, pipe } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  members = [
    { 
      id:1,
      name:'Noelle Mccarthy',
      age:21,
      address:{
        pin:100501,
        city:'Jalandhar'
      }
    },
    { 
      id:2,
      name:'Jaida Bass',
      age:25,
      address:{
        pin:100502,
        city:'Ludhiana'
      }
    },
    { 
      id:3,
      name:'Kaleigh Woodward',
      age:34,
      address:{
        pin:100503,
        city:'Amritsar'
      }
    },
    { 
      id:4,
      name:'Lilliana Kaiser',
      age:29,
      address:{
        pin:100501,
        city:'Patiala'
      }
    },
    { 
      id:5,
      name:'Sandra Krause',
      age:14,
      address:{
        pin:100505,
        city:'Bathinda'
      }
    },
    { 
      id:6,
      name:'Susan Ellison',
      age:21,
      address:{
        pin:100506,
        city:'Hoshiarpur'
      }
    },
    { 
      id:7,
      name:'Branden Graham',
      age:42,
      address:{
        pin:100507,
        city:'Moga'
      }
    },
    { 
      id:8,
      name:'Jane Torres',
      age:52,
      address:{
        pin:100508,
        city:'Abohar'
      }
    },
    { 
      id:9,
      name:'Jamarion Lutz',
      age:47,
      address:{
        pin:100509,
        city:'Khanna'
      }
    },
  ]
  constructor(
    private designUtilityService:DesignUtilityService
  ) { }

  ngOnInit(): void {
    from(this.members).pipe(
      filter(member => member.age > 25),
      pluck('age')
    ).subscribe(res=>{
      this.designUtilityService.print(res,'filterByAge')
    })
  }

}
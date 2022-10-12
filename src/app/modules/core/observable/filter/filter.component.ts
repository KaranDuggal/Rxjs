import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  member = [
    { 
      id:1,
      name:'Noelle Mccarthy',
      address:{
        pin:100501,
        city:'Jalandhar'
      }
    },
    { 
      id:2,
      name:'Jaida Bass',
      address:{
        pin:100502,
        city:'Ludhiana'
      }
    },
    { 
      id:3,
      name:'Kaleigh Woodward',
      address:{
        pin:100503,
        city:'Amritsar'
      }
    },
    { 
      id:4,
      name:'Lilliana Kaiser',
      address:{
        pin:100501,
        city:'Patiala'
      }
    },
    { 
      id:5,
      name:'Sandra Krause',
      address:{
        pin:100505,
        city:'Bathinda'
      }
    },
    { 
      id:6,
      name:'Susan Ellison',
      address:{
        pin:100506,
        city:'Hoshiarpur'
      }
    },
    { 
      id:7,
      name:'Branden Graham',
      address:{
        pin:100507,
        city:'Moga'
      }
    },
    { 
      id:8,
      name:'Jane Torres',
      address:{
        pin:100508,
        city:'Abohar'
      }
    },
    { 
      id:9,
      name:'Jamarion Lutz',
      address:{
        pin:100509,
        city:'Khanna'
      }
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
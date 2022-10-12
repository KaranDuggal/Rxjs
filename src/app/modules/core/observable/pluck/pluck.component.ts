import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  member = [
    { 
      id:1,
      name:'Name 1',
      address:{
        pin:100501,
        city:'Jalandhar'
      }
    },
    { 
      id:2,
      name:'Name 2',
      address:{
        pin:100502,
        city:'Ludhiana'
      }
    },
    { 
      id:3,
      name:'Name 3',
      address:{
        pin:100503,
        city:'Amritsar'
      }
    },
    { 
      id:4,
      name:'Name 4',
      address:{
        pin:100501,
        city:'Patiala'
      }
    },
    { 
      id:5,
      name:'Name 5',
      address:{
        pin:100505,
        city:'Bathinda'
      }
    },
    { 
      id:6,
      name:'Name 6',
      address:{
        pin:100506,
        city:'Hoshiarpur'
      }
    },
    { 
      id:7,
      name:'Name 7',
      address:{
        pin:100507,
        city:'Moga'
      }
    },
    { 
      id:8,
      name:'Name 8',
      address:{
        pin:100508,
        city:'Abohar'
      }
    },
    { 
      id:9,
      name:'Name 9',
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

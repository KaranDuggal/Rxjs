import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isExclusive:boolean = false
  constructor(
    private designUtilityService:DesignUtilityService
  ) { }

  ngOnInit(): void {
    this.designUtilityService.exclusive.subscribe(res=>{
      this.isExclusive = res
    })
  }

}

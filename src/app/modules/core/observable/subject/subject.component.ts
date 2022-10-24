import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  constructor(
    private designUtilityService:DesignUtilityService
  ) { }

  ngOnInit(): void {
    this.designUtilityService.exclusive.next(true)
  }
 ngOnDestroy(): void {
  this.designUtilityService.exclusive.next(false)
 }
}

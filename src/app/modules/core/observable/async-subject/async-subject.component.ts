import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  addVideo = new FormControl()
  asyncVideoEmit: string = ''
  asyncVideoEmitSub: Subscription|undefined
  value:string = ''

  constructor(
    private designUtilityService : DesignUtilityService
  ) { }

  ngOnInit(): void {
    this.asyncVideoEmitSub = this.designUtilityService.asyncVideoEmit.subscribe(res=>{
      this.asyncVideoEmit = res
    })
  }
  addVideoFun(){
    this.designUtilityService.asyncVideoEmit.next(this.addVideo.value)
    this.addVideo.reset()
  }
  onCompleteSub(){
    this.designUtilityService.asyncVideoEmit.complete()
  }
}

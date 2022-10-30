import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';
@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {
  user1List:Array<string> = []
  user2List:Array<string> = []
  user3List:Array<string> = []
  isUser2Subscribe:boolean = false
  isUser3Subscribe:boolean = false
  user2Subscription : Subscription|undefined
  user3Subscription : Subscription|undefined
  addVideo = new FormControl()
  constructor(
    private designUtilityService : DesignUtilityService
  ) { }

  ngOnInit(): void {
  }
  addVideoFun(){
    this.user1List.push(this.addVideo.value)
    this.designUtilityService.videoEmit.next(this.addVideo.value)
    this.addVideo.reset()
  }
  user2subscribe(){
    this.isUser2Subscribe = !this.isUser2Subscribe
    if(this.isUser2Subscribe){
      this.user2Subscription = this.designUtilityService.videoEmit.subscribe(res=>{
        this.user2List.push(res)
      })
    }
    else {      
      this.user2Subscription?.unsubscribe()
    }
  }
  user3subscribe(){
    this.isUser3Subscribe = !this.isUser3Subscribe
    if(this.isUser3Subscribe){
      this.user3Subscription = this.designUtilityService.videoEmit.subscribe(res=>{
        this.user3List.push(res)
      })
    }
    else {      
      this.user3Subscription?.unsubscribe()
    }
  }
}

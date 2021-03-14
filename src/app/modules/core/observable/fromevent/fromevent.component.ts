import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {fromEvent} from 'rxjs'

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn:ElementRef|undefined;
  count = 1
  constructor() { }

  ngOnInit(): void {  }
  ngAfterViewInit(){
    fromEvent(this.addBtn?.nativeElement,'click').subscribe(res=>{
      this.print('click')
    })
  }
  print(event:any){
    let el = document.createElement('li')
    el.innerText = `event ${this.count++}`
    document.getElementById('elContainer')?.appendChild(el)
  }
}

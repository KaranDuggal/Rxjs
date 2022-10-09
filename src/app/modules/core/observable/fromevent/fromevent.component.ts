import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {fromEvent} from 'rxjs'
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn:ElementRef|undefined;
  count = 1
  constructor(
    private _designeUtility:DesignUtilityService
  ) { }

  ngOnInit(): void {  }
  ngAfterViewInit(){
    fromEvent(this.addBtn?.nativeElement,'click').subscribe(res=>{
      let data = `duggal ${this.count++}`
      this._designeUtility.print(data,"elContainer1")
      this._designeUtility.print(data,"elContainer2")
    })
  }
  
}

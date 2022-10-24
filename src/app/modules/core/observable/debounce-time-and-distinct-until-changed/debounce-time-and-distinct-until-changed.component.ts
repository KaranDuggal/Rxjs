import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { arrOfString } from "src/app/utils/data";

@Component({
  selector: 'app-debounce-time-and-distinct-until-changed',
  templateUrl: './debounce-time-and-distinct-until-changed.component.html',
  styleUrls: ['./debounce-time-and-distinct-until-changed.component.scss']
})
export class DebounceTimeAndDistinctUntilChangedComponent implements OnInit {
  arrData : Array<string> = arrOfString
  search = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(res=>{
      this.arrData = arrOfString.filter(data=>{
        if(data.includes(res)) return data
        else return
      })
    })
  }
  
}

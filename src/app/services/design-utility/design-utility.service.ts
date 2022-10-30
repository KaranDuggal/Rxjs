import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  // exclusive = new Subject<boolean>()
  exclusive = new BehaviorSubject<boolean>(false)
  videoEmit = new ReplaySubject<string>(5,5000)
  print(data:any,elementId:any){
    let el = document.createElement('li')
    el.innerText = data
    document.getElementById(elementId)?.appendChild(el)
  }
}

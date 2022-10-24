import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  // exclusive = new Subject<boolean>()
  exclusive = new BehaviorSubject<boolean>(false)
  print(data:any,elementId:any){
    let el = document.createElement('li')
    el.innerText = data
    document.getElementById(elementId)?.appendChild(el)
  }
}

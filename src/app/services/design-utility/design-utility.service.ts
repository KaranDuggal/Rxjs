import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  print(event:any,name:any){
    let el = document.createElement('li')
    el.innerText = event
    document.getElementById(name)?.appendChild(el)
  }
}

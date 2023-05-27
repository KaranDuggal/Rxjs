import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-diff-between-observable-and-subject',
  templateUrl: './diff-between-observable-and-subject.component.html',
  styleUrls: ['./diff-between-observable-and-subject.component.scss']
})
export class DiffBetweenObservableAndSubjectComponent implements OnInit {
  observerData1:string = ''
  observerData2:string = ''
  subjectData1:string = ''
  subjectData2:string = ''
  constructor() { }

  ngOnInit(): void {
  }
  setObserverData(){
    let myObservable = new Observable<any>(observer=>{
      let count = 0;
      // setInterval(()=>{
        observer.next(`Observable count :- ${Math.floor(Math.random() * 99 + 1)}`)
      // },1000)
    })
    myObservable.subscribe(data=>{
      this.observerData1 = data;
    })
    myObservable.subscribe(data=>{
      this.observerData2 = data;
    })
  }
  setSubjectData(){
    let count = 0;
    let mySubject = new Subject<string>();
    // setInterval(()=>{
    // },1000)
    mySubject.subscribe(data=>{
      this.subjectData1 = data;
    })
    mySubject.subscribe(data=>{
      this.subjectData2 = data;
    })
    mySubject.next(`Subject count :- ${Math.floor(Math.random() * 99 + 1)}`)
  }

}

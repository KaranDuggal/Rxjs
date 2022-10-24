import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  todo:any
  status:'Fetch Data'|'Fetching...'|'Data fetch successfully'|'Error while fetching data'|'Please turn on internet'='Fetch Data'
  isLoaderShow:Boolean = false
  isError:Boolean = false

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
  }
  fetchDetails(){
    this.getTodo()
  }
  getTodo(){

  const firstTwoFibs = [0, 1];
    this.status = 'Fetching...';this.isLoaderShow = true
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      // retry(5)
      retryWhen(err=>err.pipe(
        delay(500),
        scan((retryCount)=>{
          if(retryCount > 5) throw err
          else return retryCount = retryCount +1 
        },0)
      ))
    ).subscribe(res=>{
      this.todo=res
      this.status = 'Data fetch successfully';this.isLoaderShow = false;this.isError=false
    },(err)=>{
      if(!navigator.onLine) this.status = 'Please turn on internet'
      else this.status = 'Error while fetching data';this.isLoaderShow = false;this.isError=true
    })
  }
}

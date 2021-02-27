import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseListComponent } from './promise-list/promise-list.component';

const routes: Routes = [
  {
    path:'promiselist',
    component:PromiseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromiseRoutingModule { }

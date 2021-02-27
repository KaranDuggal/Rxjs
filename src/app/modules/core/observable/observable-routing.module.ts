import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromeventComponent } from './fromevent/fromevent.component';
import { ObservablelistComponent } from './observablelist/observablelist.component';

const routes: Routes = [
  {
    path:'observablelist',
    component:ObservablelistComponent
  },
  {
    path:'fromevent',
    component:FromeventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }

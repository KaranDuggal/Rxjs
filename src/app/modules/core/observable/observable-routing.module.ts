import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { IntervalComponent } from './interval/interval.component';
import { ObservablelistComponent } from './observablelist/observablelist.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';

const routes: Routes = [
  {
    path:'observablelist',
    component:ObservablelistComponent
  },
  {
    path:'fromevent',
    component:FromeventComponent
  },
  {
    path:'interval',
    component:IntervalComponent
  },
  {
    path:'of-from',
    component:OfFromComponent
  },
  {
    path:'to-array',
    component:ToArrayComponent
  },
  {
    path:'custom-observable',
    component:CustomObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }

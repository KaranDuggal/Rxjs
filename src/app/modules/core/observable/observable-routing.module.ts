import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { FilterComponent } from './filter/filter.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { ObservablelistComponent } from './observablelist/observablelist.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { RetryComponent } from './retry/retry.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
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
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path:'pluck',
    component:PluckComponent
  },
  {
    path:'filter',
    component:FilterComponent
  },
  {
    path:'tap',
    component:TapComponent
  },
  {
    path:'take',
    component:TakeComponent
  },
  {
    path:'retry',
    component:RetryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }

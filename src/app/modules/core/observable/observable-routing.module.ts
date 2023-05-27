import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatComponent } from './concat/concat.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { DebounceTimeAndDistinctUntilChangedComponent } from './debounce-time-and-distinct-until-changed/debounce-time-and-distinct-until-changed.component';
import { FilterComponent } from './filter/filter.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeComponent } from './merge/merge.component';
import { ObservablelistComponent } from './observablelist/observablelist.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { ReplayComponent } from './replay/replay.component';
import { RetryComponent } from './retry/retry.component';
import { SubjectComponent } from './subject/subject.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { DiffBetweenObservableAndSubjectComponent } from './diff-between-observable-and-subject/diff-between-observable-and-subject.component';

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
  {
    path:'debounceTimeAndDistinctUntilChanged',
    component:DebounceTimeAndDistinctUntilChangedComponent
  },
  {
    path:'subject',
    component:SubjectComponent
  },
  {
    path:'diff-between-observable-and-subject',
    component:DiffBetweenObservableAndSubjectComponent
  },
  {
    path:'replay',
    component:ReplayComponent
  },
  {
    path:'async-subject',
    component:AsyncSubjectComponent
  },
  {
    path:'concat',
    component:ConcatComponent
  },
  {
    path:'merge',
    component:MergeComponent
  },
  {
    path:'merge-map',
    component:MergeMapComponent
  },
  {
    path:'concat-map',
    component:ConcatMapComponent
  },
  {
    path:'switch-map',
    component:SwitchMapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }

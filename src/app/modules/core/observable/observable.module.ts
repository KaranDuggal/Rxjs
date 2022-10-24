import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservablelistComponent } from './observablelist/observablelist.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import {Router} from '@angular/router';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeAndDistinctUntilChangedComponent } from './debounce-time-and-distinct-until-changed/debounce-time-and-distinct-until-changed.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';


@NgModule({
  declarations: [ObservablelistComponent, FromeventComponent, IntervalComponent, OfFromComponent, ToArrayComponent, CustomObservableComponent, MapComponent, PluckComponent, FilterComponent, TapComponent, TakeComponent, RetryComponent, DebounceTimeAndDistinctUntilChangedComponent, SubjectComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ObservableModule { }

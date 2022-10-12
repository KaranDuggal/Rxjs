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
import { MapComponent } from './map/map.component'

@NgModule({
  declarations: [ObservablelistComponent, FromeventComponent, IntervalComponent, OfFromComponent, ToArrayComponent, CustomObservableComponent, MapComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule,
  ]
})
export class ObservableModule { }

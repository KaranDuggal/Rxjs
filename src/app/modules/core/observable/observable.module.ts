import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservablelistComponent } from './observablelist/observablelist.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import {Router} from '@angular/router';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component'

@NgModule({
  declarations: [ObservablelistComponent, FromeventComponent, IntervalComponent, OfFromComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule,
  ]
})
export class ObservableModule { }

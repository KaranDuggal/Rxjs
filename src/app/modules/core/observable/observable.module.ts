import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservablelistComponent } from './observablelist/observablelist.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import {Router} from '@angular/router'

@NgModule({
  declarations: [ObservablelistComponent, FromeventComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule,
  ]
})
export class ObservableModule { }

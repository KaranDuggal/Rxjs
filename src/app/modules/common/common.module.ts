import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    CommonRoutingModule
  ],
  exports:[
    NavComponent
  ]
})
export class Common_Module { }

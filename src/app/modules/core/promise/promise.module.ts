import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromiseRoutingModule } from './promise-routing.module';
import { PromiseListComponent } from './promise-list/promise-list.component';


@NgModule({
  declarations: [PromiseListComponent],
  imports: [
    CommonModule,
    PromiseRoutingModule
  ]
})
export class PromiseModule { }

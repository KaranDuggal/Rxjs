import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHookRoutingModule } from './life-cycle-hook-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    LifeCycleHookRoutingModule
  ]
})
export class LifeCycleHookModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHookRoutingModule } from './life-cycle-hook-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent, UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    LifeCycleHookRoutingModule
  ]
})
export class LifeCycleHookModule { }

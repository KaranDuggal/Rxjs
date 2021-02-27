import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'promise',
    loadChildren:()=>import('./modules/core/promise/promise.module').then(mod=>mod.PromiseModule)
  },
  {
    path:'observable',
    loadChildren:()=>import('./modules/core/observable/observable.module').then(mod=>mod.ObservableModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Gc1Component } from './gc1/gc1.component';

const routes: Routes = [
  { path: '', redirectTo: 'v1', pathMatch: 'full' },
  { path: 'v1', component: Gc1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

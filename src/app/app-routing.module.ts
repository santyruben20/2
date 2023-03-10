import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [

  { path: 'lay',loadChildren: ()=> import('./layout/layout.module').then(m => m.LayoutModule)},
  { path: 'tab',loadChildren: ()=> import('./epn/epn.module').then(m => m.EpnModule)},
  { path: '**', component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule {}

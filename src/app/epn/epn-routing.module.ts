import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';



const routes: Routes = [
    { path: 'tabla',component: TablaComponent },
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

}) 
export class TablaRoutingModule{}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { TablaRoutingModule } from './epn-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule,
    FormsModule,
  ]
})
export class EpnModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/app/material-module';
import { NavBarComponent } from './nav-bar.component';
import { NavBarRoutingModule } from './nav-bar-routing.module';



@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    NavBarRoutingModule,
  ]
})
export class NavBarModule { }

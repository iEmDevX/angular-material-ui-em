import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material-module';
import { DialogAuthenComponent } from './dialog-authen/dialog-authen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DialogAuthenComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminLayoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }

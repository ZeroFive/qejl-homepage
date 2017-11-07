import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './header.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  providers: [],
  exports: [
    PageHeaderComponent
  ]
})
export class HeaderModule { }

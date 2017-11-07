import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CantactComponent } from './cantact.component'
import { ItemComponent } from './item.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CantactComponent,
    ItemComponent
  ],
  providers: [],
  exports: [
    CantactComponent
  ]
})
export class CantactModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IntroduceComponent } from './introduce.component'
import { CardComponent } from './card.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IntroduceComponent,
    CardComponent
  ],
  providers: [],
  exports: [
    IntroduceComponent
  ]
})
export class IntroduceModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuetionComponent } from './question.component'
import { CardComponent } from './card.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    QuetionComponent,
    CardComponent
  ],
  providers: [],
  exports: [
    QuetionComponent
  ]
})
export class QuestionModule { }

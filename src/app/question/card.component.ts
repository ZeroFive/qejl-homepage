import { Component, Input, OnInit } from '@angular/core';
import { Question } from './question'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls  : ['./card.component.css']
})
export class CardComponent {
  @Input()
  question: Question
}

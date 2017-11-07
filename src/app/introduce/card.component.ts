import { Component, Input, OnInit } from '@angular/core';
import { Introduce } from './introduce'

interface IconClass{[index: string]: boolean}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls  : ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  introduce: Introduce

  iconClass: IconClass = {}

  ngOnInit() {
    this.iconClass[this.introduce.icon] = true
  }
}


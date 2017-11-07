import { IntroduceServer } from './IntroduceServer';
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Introduce } from './introduce';
import { NavigaterService } from '../navigaterService';

@Component({
  selector: 'introduce',
  templateUrl: './introduce.component.html',
  styleUrls  : ['./introduce.component.css'],
  providers: [IntroduceServer]
})
export class IntroduceComponent{
  introduces: [Introduce]

  constructor(private el: ElementRef, private navigaterService: NavigaterService, private introduceServer: IntroduceServer, private renderer2: Renderer2) {
    this.introduces = introduceServer.getIntroduceList()
  }

  ngOnInit() {
    this.navigaterService.scrollObservable.subscribe((event) => {
      let len =  event['target'].scrollingElement.scrollTop - this.el.nativeElement.offsetTop
      if (len > -100 && len < 100) {
        this.navigaterService.announceNavigater('introduceLink')
      }
    })
  }
}


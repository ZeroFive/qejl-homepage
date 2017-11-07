
import { Item } from './item';
import { ItemServer } from './itemServer';
import { Component, Provider, ElementRef, OnInit, Renderer2} from '@angular/core';
import { NavigaterService } from '../navigaterService'

@Component({
  selector: 'cantact',
  templateUrl: './cantact.component.html',
  styleUrls: ['./cantact.component.css'],
  providers: [ItemServer]
})
export class CantactComponent {
  items: [Item]
  qqUrl: string = 'https://jq.qq.com/?_wv=1027&k=4CIV7Bk'

  constructor(private el: ElementRef, private itemServer: ItemServer, private navigaterService: NavigaterService, private renderer2: Renderer2) {
    this.items = itemServer.getItemList()
  }

  ngOnInit() {
    this.navigaterService.scrollObservable.subscribe((event) => {
      let len =  event['target'].scrollingElement.scrollTop - this.el.nativeElement.offsetTop
      if (len > -100 && len < 100) {
        this.navigaterService.announceNavigater('cantactLink')
      }
    })
  }
}

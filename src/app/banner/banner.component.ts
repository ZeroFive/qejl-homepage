import {
  AfterContentInit,
  animate,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigaterService } from '../navigaterService';
import { fadeAnimation } from './animations';

interface Item {

}

@Component({
  selector: 'banner',
  animations: [fadeAnimation],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  androidUrl: string = 'http://ok4zxzku1.bkt.clouddn.com/o_1br4ojt4f1k2d12p8gfq1cat16739.apk?e=1509363851&token=W57xhMYFKcktRkCreEKZctd7gbwiWRdxKpOr5Wer:wbkvT_ppnV_VeXUX4UgyER7f3fo='

  items:[Item] = [{
    title: '免费 - 极速 - 简单',
    subTitle: '专业专注，让你体验最好的服务',
    label: '马上下载APP，立享优惠'
  }, {
    title: '操作简单，一目了然',
    subTitle: '操作人性化，简单易用，200天精雕细琢，只为遇见美的你',
    label: '立即下载APP'
  },{
    title: '海量商品，超低价格',
    subTitle: '空间人气、游戏辅助、想你所想，最优惠的价格为你所想',
    label: '立即体验'
  }]

  constructor(private hostElement: ElementRef, private navigaterService: NavigaterService, private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer2.listen('document', 'scroll', (event) => {
      let len = event.target.scrollingElement.scrollTop - this.hostElement.nativeElement.offsetTop
      if (len > -100 && len < 100) {
        this.navigaterService.announceNavigater('homeLink')
      }
    })
  }
}

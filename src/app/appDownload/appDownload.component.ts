import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NavigaterService } from '../navigaterService';

@Component({
  selector: 'appdownload',
  templateUrl: './appDownload.component.html',
  styleUrls  : ['./appDownload.component.css']
})
export class AppDownloadComponent{
  androidUrl: string = 'http://ok4zxzku1.bkt.clouddn.com/o_1br4ojt4f1k2d12p8gfq1cat16739.apk?e=1509363851&token=W57xhMYFKcktRkCreEKZctd7gbwiWRdxKpOr5Wer:wbkvT_ppnV_VeXUX4UgyER7f3fo='
  
  constructor(private el: ElementRef, private navigaterService: NavigaterService, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.navigaterService.scrollObservable.subscribe((event) => {
      let len =  event['target'].scrollingElement.scrollTop - this.el.nativeElement.offsetTop
      if (len > -100 && len < 100) {
        this.navigaterService.announceNavigater('appdownloadLink')
      }
    })
  }
}



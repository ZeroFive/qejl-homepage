import { Item } from './item';
import { Component, Input, Provider } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input()
  item: Item

  @Input()
  qqLink: boolean
  androidUrl: string = 'http://ok4zxzku1.bkt.clouddn.com/o_1br4ojt4f1k2d12p8gfq1cat16739.apk?e=1509363851&token=W57xhMYFKcktRkCreEKZctd7gbwiWRdxKpOr5Wer:wbkvT_ppnV_VeXUX4UgyER7f3fo='
  qqUrl: string = 'https://jq.qq.com/?_wv=1027&k=4CIV7Bk'
}

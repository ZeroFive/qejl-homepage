import { Item } from './item';
export class ItemServer {
  getItemList(): [Item] {
    return [
      {
        title: '理论永久QQ会员',
        content: '质保一月',
        number: 720,
        unit: '积分'
      },
      {
        title: '名片赞免费体验',
        content: '注册即享',
        number: 0,
        unit: '积分'
      },
      {
        title: '空间人气免费体验',
        content: '注册即享',
        number: 0,
        unit: '积分'
      },
      {
        title: '优质供货商每月轻松赚取',
        content: '入驻即享受',
        number: 3000,
        unit: '元起'
      }
    ]
  }
}

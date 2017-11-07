import { Introduce } from './introduce'

export class IntroduceServer {
  getIntroduceList(): [Introduce] {
    return [
      {
        title: '消费降低',
        content: '最新第一手货源，带来全网最低的价格，最优质的服务',
        icon: 'fa fa-rocket',
        color: '#2fc5cc'
      },
      {
        title: '操作简单',
        content: '个人中心订单查询，在线充值方便快捷，随时了解订单情况',
        icon: 'fa fa-heart-o',
        color: '#e52b50'
      },
      {
        title: '安卓/苹果',
        content: '支持目前最流行的机型，苹果IOS/安卓全机型兼容',
        icon: 'fa fa-mobile',
        color: '#00bff3'
      },
      {
        title: '随时享受',
        content: '有信号的地方即可使用，移动端随时随地畅快享受',
        icon: 'fa fa-smile-o',
        color: '#f26522'
      },
      {
        title: '方便快捷',
        content: '只需要输入您注册的账号和密码，轻松登录即可享受',
        icon: 'fa fa-eye',
        color: '#2aaf67'
      },
      {
        title: '海量资源',
        content: '会员、名片赞、空间人气、游戏辅助，海量商品等你来体验',
        icon: 'fa fa-database',
        color: '#6173f4'
      }
    ]
  }
}

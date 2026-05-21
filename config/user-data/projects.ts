export interface Project {
  title: string
  role: string
  description: string
  url: string
  previewImage: string
}

export const UserProjectsData: Project[] = [
  {
    title: "全能采集",
    role: "覆盖各大主流电商平台的采集工具，包含：淘宝，京东，闲鱼，1688，ozon，ebay等",
    description:
      "业务方面：覆盖关键词采集，整店采集，详情采集等电商业务中常见的采集需求。\n\n" +
      "技术方面：模拟的采集使用 drissionpage，协议/接口获取数据的细节以及 js 逆向不对外透露，卡密后端使用 django，电脑机器码+卡密进行校验。\n\n" +
      "想了解更多技术细节或者有合作意向以及定制需求可以联系我，我会详细解答。",
    url: "https://github.com/baki003/CJ_open.git",
    previewImage: "/images/caiji.png",
  },
  {
    title: "千牛ai客服",
    role: "电脑千牛客户端的ai客服，也是走的爬虫协议进行收发数据",
    description:
      "业务方面：分店铺自定义 ai 客服人设，对店铺商品进行学习，能做到自主根据客户对话推荐商品，基本的智能回复也不在话下。\n\n" +
      "我要特别介绍它的亮点：无风险首发所有类型的消息（语音，视频，图片），得益于当前攻克的逆向算法，无视千牛版本，无任何风控问题，本质上就是千牛客户端本身的收发消息逻辑。\n\n" +
      "技术方面：逆向技术不过多透露，ai 方面使用自己进行微调的自研 ai 模型，也支持自己购买 token 接入其它大模型进行回复。\n\n" +
      "想了解更多技术细节或者有合作意向以及定制需求可以联系我，我会详细解答。",
    url: "https://github.com/baki003/QN_CService.git",
    previewImage: "/images/qianniukefu.png",
  },
]

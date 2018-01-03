import { color } from '../utils/theme'

const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

const Dashboard = Mock.mock({
  'sales|8': [
    {
      'name|+1': 2008,
      'BDP|200-500': 1,
      'BDRT|100-230': 1,
      'BDCN|120-290': 1,
    },
  ],
  cpu: {
    'usage|50-600': 1,
    space: 825,
    'cpu|40-90': 1,
    'data|20': [
      {
        'cpu|20-80': 1,
      },
    ],
  },
  browser: [
    {
      name: 'Google Chrome',
      percent: 43.3,
      status: 1,
    },
    {
      name: 'Mozilla Firefox',
      percent: 33.4,
      status: 2,
    },
    {
      name: 'Apple Safari',
      percent: 34.6,
      status: 3,
    },
    {
      name: 'Internet Explorer',
      percent: 12.3,
      status: 4,
    },
    {
      name: 'Opera Mini',
      percent: 3.3,
      status: 1,
    },
    {
      name: 'Chromium',
      percent: 2.53,
      status: 1,
    },
  ],
  user: {
    name: 'xingjianwei',
    email: 'xingjianwei@.gmail.com',
    recieve: 341,
    accept: 256,
    avatar: 'http://www.beagledata.com/wp-content/uploads/2015/02/xingjianwei.png',
  },
  'completed|12': [
    {
      'name|+1': 2008,
      '远程支持|200-1000': 1,
      '现场安装|200-1000': 1,
    },
  ],
  'comments|5': [
    {
      name: '@last',
      'status|1-3': 1,
      content: '@sentence',
      avatar () {
        return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
      },
      date () {
        return `2016-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
    },
  ],
  'recentSales|36': [
    {
      'id|+1': 1,
      name: '@last',
      'status|1-4': 1,
      date () {
        return `${Mock.Random.integer(2015, 2016)}-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`
      },
      'price|10-200.1-2': 1,
    },
  ],
  quote: {
    name: '王小明',
    title: '数据分析',
    content: 'BDRT（Beagledata Realtime Transaction）是一款大规模高并发支持灵活查询的实时查询引擎，具有高可用、可横向扩展、健壮性的特点。',
    avatar: 'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
  },
  numbers: [
    {
      icon: 'pay-circle-o',
      color: color.green,
      title: '总许可数',
      number: 8848,
    }, {
      icon: 'team',
      color: color.blue,
      title: '总客户数',
      number: 3241,
    }, {
      icon: 'message',
      color: color.purple,
      title: '有效许可数',
      number: 253,
    }, {
      icon: 'shopping-cart',
      color: color.red,
      title: '总节点数',
      number: 4324,
    },
  ],
})

module.exports = {
  [`GET ${apiPrefix}/dashboard`] (req, res) {
    res.json(Dashboard)
  },
}

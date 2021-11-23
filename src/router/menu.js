const menu = [
  {
    path: '/index',
    name: '首页',
    icon: 'icon-dynamic_fill',
    level: 1,
    sort: 1,
    children: [],
    fixed: false
  },
  {
    path: '/',
    name: '信息查询',
    icon: 'icon-createtask_fill',
    level: 0,
    fixed: false,
    children: [
      {
        level: 1,
        path: '/info',
        name: '学校基本信息',
        icon: 'icon-dynamic_fill',
        children: [],
        fixed: false,
        hidden: true
      },
      {
        path: '/subject',
        name: '专业基本信息',
        children: [],
        fixed: false,
        level: 0
      },
      {
        level: 1,
        path: '/score',
        name: '分数排行信息',
        icon: 'icon-addpeople_fill',
        children: [],
        fixed: false
      }
    ]
  },
  {
    path: '/',
    name: '智能咨询',
    level: 0,
    icon: 'icon-addpeople_fill',
    fixed: false,
    children: [
      {
        level: 1,
        path: '/question',
        children: [],
        fixed: false,
        name: '提问'
      },
      {
        level: 1,
        path: '/introduction',
        children: [],
        fixed: false,
        name: '简介'
      }
    ]
  },
  {
    path: '/',
    name: '管理',
    level: 0,
    icon: 'icon-manage_fill',
    fixed: false,
    children: [
      {
        level: 0,
        path: '/login',
        children: [],
        fixed: false,
        name: '重新登录'
      },
      {
        level: 1,
        path: '/register',
        icon: 'icon-addpeople_fill',
        children: [],
        fixed: false,
        name: '注册'
      }
    ]
  },
  {
    path: '/index',
    name: '123',
    icon: 'icon-wujiaoxing',
    // hidden: true,
    level: 0,
    sort: 1,
    children: [],
    fixed: false
  },
  {
    path: '/index',
    name: '123',
    icon: 'icon-wujiaoxing',
    // hidden: true,
    level: 0,
    sort: 1,
    children: [],
    fixed: false
  }

]

export default menu

export default {
  banners: [
    { id: 0, name: '螺蛳粉' },
    { id: 1, name: '螺蛳粉' },
  ],
  menus: [
    {
      id: 10,
      name: '热门',
      content: [
        { id: 141, name: '拼多多', icon: 'pdd', urlScheme: 'pinduoduo://' },
        { id: 101, name: '美团', icon: 'mt', isHot: true, urlScheme: 'waimai://' },
        { id: 102, name: '饿了么', icon: 'elm', urlScheme: 'eleme://' },
        { id: 103, name: '蜜雪冰城', icon: 'mxbc' },
        { id: 104, name: '肯德基', icon: 'kdj' },
        { id: 105, name: '麦当劳', icon: 'mdl' },
        { id: 106, name: '必胜客', icon: 'bsk' },
        { id: 107, name: '猫眼', icon: 'my' },
      ],
    },
    {
      id: 11,
      name: '出行',
      content: [
        { id: 111, name: '飞猪', icon: 'fz' },
        { id: 112, name: '滴滴', icon: 'dd', urlScheme: 'didiapp://' },
        { id: 113, name: '花小猪', icon: 'hxz' },
        { id: 114, name: '高德', icon: 'gd', urlScheme: 'androidamap://' },
        { id: 115, name: '携程', icon: 'xc' },
      ],
    },
    {
      id: 12,
      name: '餐饮',
      content: [
        { id: 121, name: '星巴克', icon: 'xbk', urlScheme: 'starbucks://' },
        { id: 122, name: '蜜雪冰城', icon: 'mxbc' },
        { id: 123, name: '喜茶', icon: 'xic', urlScheme: 'heytea://' },
      ],
    },

    {
      id: 14,
      name: '快递',
      content: [
        { id: 141, name: '拼多多', icon: 'pdd', urlScheme: 'pinduoduo://' },
        { id: 142, name: '京东', icon: 'jd', urlScheme: 'jd://' },
        { id: 143, name: '盒马', icon: 'hm' },
        { id: 144, name: '淘宝', icon: 'tb', urlScheme: 'tbopen://' },
      ],
    },
  ],

  navs: [
    {
      id: 60,
      name: '全城霸王餐',
    },
    {
      id: 61,
      name: '大牌专享',
    },
    {
      id: 62,
      name: '返利餐',
    },
  ],
  recommends: [
    { id: 70, name: '推荐排序' },
    { id: 71, name: '距离最近' },
  ],
  filterLists: [
    { id: 72, name: '高返利', checked: false },
    { id: 73, name: '无需评价', checked: false },
  ],

  meals: [
    { id: 100, name: '早餐' },
    { id: 101, name: '午餐' },
    { id: 102, name: '甜品奶茶' },
    { id: 103, name: '晚餐' },
    { id: 104, name: '夜宵' },
    { id: 105, name: '零售' },
  ],
  platform: [
    { id: 200, name: '美团' },
    { id: 201, name: '饿了么' },
  ],
};

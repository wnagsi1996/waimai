const WXAPI=require('apifm-wxapi')
Page({
  data(){
    menuList:[]
  },
  onLoad:function(){
    this.getMenuList();
  },
  //获取菜单导航
  async getMenuList(){
    const res = await WXAPI.goodsCategory()
    console.log(res)
  }
})
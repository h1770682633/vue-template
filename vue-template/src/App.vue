<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar :tabArr="tabArr"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/common/tabBar/TabBar';
export default {
  name: 'App',
  components: {
    TabBar,
  
  },
  data() {
    return {
      tabArr: [
        {
          iconUrl: require('img/icon-home.svg'),
          iconUrlActive: require('img/icon-home-active.svg'),
          text: '首页',
          link: '/home',
        },
        {
          iconUrl: require('img/icon-classify.svg'),
          iconUrlActive: require('img/icon-classify-active.svg'),
          text: '分类',
          link: '/classify',
        },
        {
          iconUrl: require('img/icon-cart.svg'),
          iconUrlActive: require('img/icon-cart-active.svg'),
          text: '购物车',
          link: '/cart',
        },
        {
          iconUrl: require('img/icon-my.svg'),
          iconUrlActive: require('img/icon-my-active.svg'),
          text: '我的',
          link: '/my',
        },
      ],
    };
  },
};
</script>

<style lang="less">
  @import url('~css/reset.css');
</style>

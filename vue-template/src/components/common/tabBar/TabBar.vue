<template>
  <ul class="tab-bar">
    <li v-for="(item, index) in tabArr" :key="index" class="tab-item" :class="{ active: isActive(item.link) }">
      <router-link :to="item.link">
        <img :src="item.iconUrl" alt="" v-show="!isActive(item.link)" />
        <img :src="item.iconUrlActive" alt="" v-show="isActive(item.link)" />
        <p class="title">{{ item.text }}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'TabBar',
  props: {
    tabArr: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    isActive(link) {
      return this.$route.path.indexOf(link) != -1;
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 44px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background: rgba(222, 222, 222, 0.5);
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.1);
  li {
    flex: 1;
  }
}
.tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 49px;
  text-align: center;
  img {
    height: 16px;
  }
  p {
    font-size: 12px;
    margin-top: 3px;
  }
  &.active {
    p {
      color: red;
    }
  }
}
</style>

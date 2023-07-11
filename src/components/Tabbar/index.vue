<template>
  <van-tabbar
    v-model="active"
    :border="false"
    route
    fixed
    class="max-w-187.5 left-1/2 transition-transform -translate-x-1/2"
    @change="handleChange">
    <van-tabbar-item
      v-for="item in tabBarIcons"
      :key="item.id"
      :to="item.to">
      <template #icon="props">
        <img
          v-if="props.active"
          :src="item.activeIcon"
          alt="" />
        <img
          v-if="!props.active"
          :src="item.inactiveIcon"
          alt="" />
      </template>
      <p class="tab_text">{{ item.name }}</p>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts" name="TabBar">
  import { ref } from 'vue';
  import LearnActiveIcon from '/@/assets/images/learn_active.png';
  import LearnIcon from '/@/assets/images/learn.png';
  import FindClassActiveIcon from '/@/assets/images/find_class_active.png';
  import FindClassIcon from '/@/assets/images/find_class.png';
  import MyActiveIcon from '/@/assets/images/my_active.png';
  import MyIcon from '/@/assets/images/my.png';
  const active = ref(0);

  const tabBarIcons = ref([
    {
      id: 0,
      activeIcon: LearnActiveIcon,
      inactiveIcon: LearnIcon,
      name: '首页',
      to: '/home',
    },
    {
      id: 1,
      activeIcon: FindClassActiveIcon,
      inactiveIcon: FindClassIcon,
      name: '订单',
      to: '/order',
    },
    {
      id: 2,
      activeIcon: FindClassActiveIcon,
      inactiveIcon: FindClassIcon,
      name: '分享',
      to: '/share',
    },
    {
      id: 3,
      activeIcon: MyActiveIcon,
      inactiveIcon: MyIcon,
      name: '我的',
      to: '/my',
    },
  ]);

  const emit = defineEmits<{
    (e: 'change', value: number): void;
  }>();

  function handleChange(value) {
    emit('change', value);
  }
</script>

<style scoped lang="less">
  .van-tabbar {
    background-color: #f9f9f9;
  }

  .van-tabbar-item.van-tabbar-item--active {
    background-color: transparent;
  }

  .van-tabbar-item.van-tabbar-item--active {
    font-size: 10px;
    color: #f02d2d;
  }

  .van-tabbar-item {
    // justify-content: flex-start;
    color: #8c9198;

    .van-badge__wrapper.van-tabbar-item__icon {
      img {
        width: 22px;
        height: 22px;
      }
    }
    // .tab_text {
    //  padding-top: 3px;
    // }
  }
</style>

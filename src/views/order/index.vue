<template>
  <div class="container">
    <van-tabs
      v-model:active="activeId"
      color="#f02d2d"
      animated
      sticky
      class="bg-transparent max-w-187.5">
      <van-tab
        v-for="item in menus"
        :key="item.id"
        :name="item.id"
        :title="item.name">
        <div class="px-4 mt-3">
          <div
            class="rounded-md bg-white mb-3"
            v-for="v in 10"
            :key="v">
            <div>
              <div class="flex justify-between items-center p-3">
                <div class="uppercase text-[14px] font-bold text-[#333333]">订单编号: hdjsahdjashdjasdyuias</div>
                <div class="text-xs text-[#666]">美团外卖</div>
              </div>
              <div class="van-hairline--top"></div>
              <div class="flex p-3">
                <div class="w-20 h-20 bg-c_grey_l rounded-md">
                  <img
                    class="w-full h-full image-render-pixel object-center object-cover rounded-md"
                    src="/@/assets/images/banner.webp"
                    alt="" />
                </div>
                <div class="ml-3">
                  <div class="text-[#333333] font-bold">张威少东北水饺(浙江医院店)</div>
                  <div class="flex items-center gap-x-2 mt-1">
                    <p
                      class="text-xs text-[#ff7d46] bg-[#FEE9CA] px-2 py-px"
                      v-for="c in 2"
                      :key="c">
                      满20减9
                    </p>
                  </div>

                  <div class="flex items-center whitespace-nowrap text-xs text-[#777777] mt-2">下单时间: 2023-03-04 12:12:21</div>
                  <div class="flex items-center whitespace-nowrap text-xs text-c_theme/80 mt-1">取消原因: 超时取消</div>
                </div>
              </div>
            </div>

            <div class="van-hairline--top"></div>
            <div class="w-full text-center p-3 font-bold text-base">已取消</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts" name="Order">
  const menus = [
    { id: 1, name: '进行中' },
    { id: 2, name: '已返现' },
    { id: 3, name: '取消&过期' },
  ];
  const activeId = ref(menus[0].id);
</script>

<style scoped></style>

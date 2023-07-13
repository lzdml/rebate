<template>
  <div class="content pt-14 px-4 pb-19">
    <custom-header
      title="提交订单及反馈信息"
      :border="false"
      class="z-20"
      @click-left="router.back()" />

    <div class="bg-white rounded-md box">
      <div class="flex gap-x-3 p-4 pb-0">
        <div class="w-24 h-24 flex-shrink-0 relative z-1">
          <img
            class="w-full h-full image-render-pixel object-center object-contain rounded-md"
            src="http://p1.meituan.net/business/e65284d622dc3750acde4b5a2e9035af189516.jpg"
            alt="" />
        </div>

        <div class="flex-1 w-0">
          <p
            class="whitespace-nowrap text-ellipsis overflow-hidden text-base font-bold text-[#3d3d3d]"
            @click="copy('店铺名称', { msg: '店铺名称已复制', type: 'default' })">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur officia omnis molestias, libero esse
          </p>

          <div class="text-xs text-[#999] mt-0.5 leading-4">
            <span>店铺地址:</span>
            <span>上海大世界嗲输掉牙素上海大世界嗲输掉牙素</span>
          </div>

          <div class="flex gap-x-3">
            <button
              v-feed-touch
              border="~ solid c_theme/80"
              class="mt-2 border-none px-3 py-1 rounded-md text-xs bg-transparent text-c_theme/80">
              已报名
            </button>
            <button
              v-feed-touch
              class="mt-2 border-none px-3 py-1 rounded-md text-xs bg-c_theme/80 text-white">
              复制店铺关键字
            </button>
          </div>
        </div>
      </div>

      <div class="van-hairline--top py-4 text-xs text-[#999] mt-1.5 font-500 flex items-center justify-between px-4 pb-4">
        <div>抢单时间：10:00-23:59</div>
        <div>0.1km</div>
      </div>
      <!-- <div class="flex items-center gap-x-3">
        <div class="w-full text-center p-3 font-bold text-base flex-1">剩余{{ '1' }}份 立即参与</div>
      </div> -->
    </div>

    <div class="bg-white rounded-md box mt-3 p-4">
      <div class="flex gap-x-3">
        <div class="flex flex-col items-center">
          <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">1</p>
          <p
            class="flex-1"
            border="~ dashed c_theme/60"></p>
        </div>
        <div class="mb-4">
          <p class="font-bold text-[14px]">
            报名成功，要求实付满
            <span class="font-bold text-c_theme/80">20</span>
            返
            <span class="font-bold text-c_theme/80">10</span>
          </p>
          <p class="text-xs text-[#999] mt-2px text-c_theme/80">实返金额7元（商家优惠7 +霸王餐红包0）</p>
        </div>
      </div>

      <div class="flex justify-center items-center pl-2 h-1">
        <p
          class="flex-1"
          border="~ dashed c_theme/60"></p>
        <h4 class="px-3">活动要求：1图15字</h4>
        <p
          class="flex-1"
          border="~ dashed c_theme/60"></p>
      </div>

      <div class="flex gap-x-3 pt-4">
        <div class="flex flex-col items-center relative">
          <p class="z-1 w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">2</p>
          <p
            class="flex-1 absolute left-1/2 transition-transform -translate-x-1/2 z-0 -top-4 h-full"
            border="~ dashed c_theme/60"></p>
          <p
            class="absolute left-1/2 transition-transform -translate-x-1/2 z-0 -bottom-4 h-7"
            border="~ dashed c_theme/60"></p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-[14px]">先领红包，再去下单更优惠哦～</p>
          <div class="flex items-center gap-x-3 mt-4">
            <button
              v-feed-touch
              class="border-none px-3 py-2 text-xs rounded-full text-[#6a6a6a]">
              立即领取外卖红包
            </button>
            <button
              v-feed-touch
              class="border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white">
              一键进店下单
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center pl-2 h-1 py-4">
        <p
          class="flex-1"
          border="~ dashed c_theme/60"></p>
        <h4 class="px-3 flex items-center">
          <span class="font-bold text-c_theme/80 mx-3 mr-2 !text-[14px]">距离结束</span>
          <CountdownTimer
            :time="1000"
            class="text-xs bg-c_theme/80 text-white px-1 rounded-sm" />
        </h4>
        <p
          class="flex-1"
          border="~ dashed c_theme/60"></p>
      </div>

      <div class="flex gap-x-3">
        <div class="flex flex-col items-center relative">
          <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">3</p>
          <p
            class="flex-1"
            border="~ dashed c_theme/60"></p>
          <p
            class="h-4 absolute left-1/2 transition-transform -top-4 -translate-x-1/2"
            border="~ dashed c_theme/60"></p>
        </div>

        <div class="w-full">
          <p class="font-bold text-[14px] flex items-center">提交订单号及订单截图</p>

          <p class="text-xs text-[#999] mt-2px">
            <span>需要在</span>
            <span class="text-c_theme/80 font-bold">报名后1小时内</span>
            <span>提交，</span>
            <span class="text-c_theme/80 font-bold">超时视为自动放弃活动</span>
          </p>

          <div class="flex items-center justify-between mt-1 text-xs">
            <p class="font-bold">
              外卖订单号
              <span class="text-c_theme/80">*</span>
            </p>
            <p class="text-c_theme/80 font-bold">如何获取外卖订单号？</p>
          </div>

          <div class="my-3 h-12">
            <input
              class="w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none"
              type="text"
              v-model="params.orderNum"
              placeholder="请输入外卖订单号" />
          </div>

          <div class="flex items-center justify-between">
            <p>
              订单截图（请勿长截图）
              <span class="font-bold text-c_theme/80">*</span>
            </p>
            <button
              v-feed-touch
              class="border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white">
              前往截图
              <van-icon name="arrow" />
            </button>
          </div>

          <div class="py-3">
            <van-uploader
              v-model="fileList"
              preview-size="60"
              multiple
              :after-read="afterRead"
              :max-count="2" />
          </div>
          <div class="text-xs text-c_theme/80 font-bold flex justify-between items-center pb-4">
            <p>店铺名+实付金额+订单号+下单时间</p>
            <button
              v-feed-touch
              class="border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white">
              如何获取
              <van-icon name="arrow" />
            </button>
          </div>
        </div>
      </div>

      <div class="flex gap-x-3">
        <div class="flex flex-col items-center">
          <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">4</p>
          <p
            class="flex-1"
            border="~ dashed c_theme/60"></p>
        </div>
        <div class="mb-4">
          <p class="font-bold text-[14px]">订单送达体验后提交反馈截图</p>
          <p class="text-xs text-[#999] mt-2px">
            需要在
            <span class="font-bold text-c_theme/80">次日凌晨3点前</span>
            提交，
            <span class="font-bold text-c_theme/80">次日凌晨3点后提交会减少2元，次日13点后将自动关闭订单</span>
            。
            <span class="font-bold text-c_theme/80">注：灌水内容或与本店无关图片无返，无图无字或反馈被折叠减少5元。</span>
          </p>
        </div>
      </div>

      <div class="flex gap-x-3">
        <div class="flex flex-col items-center">
          <p class="w-4 h-0 flex items-center justify-center bg-transparent text-white rounded-full text-xs font-bold">4</p>
          <p
            class="flex-1"
            border="~ dashed c_theme/60"></p>
        </div>

        <div class="mb-4">
          <div class="flex justify-between items-center">
            <p>
              评价截图（请勿长截图）
              <!-- <span class="font-bold text-c_theme/80">*</span> -->
            </p>
            <button
              v-feed-touch
              class="border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white">
              快速截图
              <van-icon name="arrow" />
            </button>
          </div>
          <div class="py-3">
            <van-uploader
              v-model="fileList1"
              preview-size="60"
              multiple
              :after-read="afterRead1"
              :max-count="2" />
          </div>
          <div class="text-xs text-c_theme/80 font-bold flex justify-between items-center pb-4">
            <p>截图需要店铺名称+评价</p>
            <button
              v-feed-touch
              class="border-none px-3 py-2 text-xs rounded-full bg-c_theme/80 text-white">
              如何获取
              <van-icon name="arrow" />
            </button>
          </div>
          <p class="text-[14px]">
            对商家的意见和建议（提交有效建议
            <span>有概率得晓晓红包</span>
            ）
          </p>
          <div class="field-container bg-[#f6f7f9] rounded-md my-3 px-2">
            <van-field
              v-model="params.comments"
              rows="2"
              autosize
              label=""
              type="textarea"
              maxlength="50"
              placeholder="请输入留言"
              show-word-limit />
          </div>
        </div>
      </div>

      <div class="flex gap-x-3">
        <div class="flex flex-col items-center">
          <p class="w-4 h-4 flex items-center justify-center bg-c_theme/80 text-white rounded-full text-xs font-bold">5</p>
          <!-- <p
            class="flex-1"
            border="~ dashed c_theme/60"></p> -->
        </div>
        <div class="mb-4">
          <p class="font-bold text-[14px]">根据平台要求完善信息后，等待霸王餐急速返现</p>
          <p class="text-xs text-[#999] mt-2px text-c_theme/80">单单极速秒审核，无需提现秒到账</p>

          <div class="flex flex-col mb-3">
            <div class="text-[14px] font-bold my-3 flex items-center">
              <p>
                请输入支付宝账号
                <span class="text-c_theme/80">*</span>
              </p>
              <p class="text-xs text-[#666]">（如：18866666666）</p>
            </div>
            <div class="w-full h-12">
              <input
                class="w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none"
                type="text"
                v-model="params.aliAccount"
                placeholder="请输入支付宝账号（如：18866666666）" />
            </div>
          </div>

          <div class="flex flex-col mb-3">
            <div class="text-[14px] font-bold my-3 flex items-center">
              <p>
                请输入支付宝收款姓名
                <span class="text-c_theme/80">*</span>
              </p>
              <p class="text-xs text-[#666]">（如：张三）</p>
            </div>
            <div class="w-full h-12">
              <input
                class="w-full h-full bg-[#f9f9f9] pl-4 rounded-md placeholder-text-[#6A6A6A] outline-none"
                type="text"
                v-model="params.aliName"
                placeholder="请输入支付宝收款姓名（如：李四）" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box bg-white rounded-md p-4 text-[14px] text-[#333] mt-3">
      <div class="font-bold mb-1">不会操作? 快来添加您的私人客服吧</div>
      <div class="text-xs text-[#777] mb-2">无需担忧步骤繁杂, 让您快速提现</div>
      <button
        v-feed-touch
        @click="setContactState(true)"
        class="border-none bg-c_theme/80 text-white px-3 py-2 rounded-md outline-none">
        添加您的私人客服
      </button>
    </div>

    <div class="fixed max-w-187.5 left-1/2 transition-transform -translate-x-1/2 bottom-0 w-full h-15 bg-white flex justify-center items-center px-8 py-2">
      <button
        v-feed-touch
        @click="submitOrder"
        class="w-full h-full border-none rounded-md bg-c_theme/80 text-white">
        确认提交订单号及订单截图
      </button>
    </div>

    <CustomModal
      :show="showContactState"
      class="!w-9/10 !max-w-100 !rounded-md relative">
      <div>
        <div
          class="absolute right-4 top-4.5"
          @click="setContactState(false)">
          <van-icon
            name="cross"
            size="22px"
            color="#ccc" />
        </div>
        <h2 class="text-center text-base">添加客服</h2>

        <div
          class="w-44 h-44 p-4 bg-c_grey_l m-2 mx-auto rounded-md"
          @click="copy('微信号', { msg: '已复制客服微信号' })">
          <img
            class="w-full h-full object-center object-contain rounded-md"
            src="/@/assets/images/wechat.jpg"
            alt="" />
        </div>
        <div class="text-center text-[#999] text-xs pb-2">
          <p class="mb-1">保存二维码添加私人客服</p>
          <p>
            为你高效解答
            <span>返现流程</span>
          </p>
        </div>
      </div>
    </CustomModal>
  </div>
</template>

<script setup lang="ts" name="OrderDetail">
  import { useRouter } from 'vue-router';
  import copy from '/@/utils/copy';
  import { reactive, ref } from 'vue';
  import Message from '/@/utils/msg';
  import { useLoading } from '/@/hooks';
  import { sleep } from '/@/utils';

  const message = new Message();

  const router = useRouter();

  const params = reactive({
    orderNum: '',
    comments: '',
    aliAccount: '',
    aliName: '',
  });

  const fileList = ref([]);
  const afterRead = (file) => {
    // 此时可以自行将文件上传至服务器
    console.log(file);
    message.setOption({
      type: 'success',
      message: '上传成功-' + file.file.name,
    });
  };
  const fileList1 = ref([]);
  const afterRead1 = (file) => {
    // 此时可以自行将文件上传至服务器
    console.log(file);
    message.setOption({
      type: 'success',
      message: '上传成功-' + file.file.name,
    });
  };

  const { loading: showContactState, setLoading: setContactState } = useLoading({ initValue: false });

  async function submitOrder() {
    message.setOption({
      type: 'success',
      message: '已提交!',
      duration: 2000,
    });
    await sleep(2000);
    router.push('/order');
  }

  const themeVars = reactive({});
</script>

<style scoped lang="less">
  .box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .field-container {
    :deep(.van-cell) {
      padding-left: 0 !important;
      padding-right: 0 !important;
      background: #f6f7f9;
      border-radius: 6px !important;
    }
  }
</style>

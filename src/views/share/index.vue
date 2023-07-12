<template>
  <div class="container px-4 overflow-hidden pt-4">
    <div
      class="bg-white rounded-md box"
      ref="shareContainer">
      <div class="w-full relative h-0 pb-[100%] rounded-t-md bg-[#f9f9f9]">
        <img
          class="w-full h-full rounded-t-md absolute top-0 left-0 image-render-pixel"
          src="/@/assets/images/share.webp"
          alt="" />
      </div>
      <div class="flex py-6 px-4 justify-between">
        <div class="flex flex-col">
          <p class="flex items-center gap-x-3">
            <img
              class="w-8 h-8 object-center object-cover image-render-pixel rounded-full"
              src="/@/assets/images/share.webp"
              alt="" />
            <span class="font-bold text-base">null的推荐</span>
          </p>
          <p class="text-[#6a6a6a] leading-8">名额有限 扫码立享</p>
        </div>
        <div class="qrcode w-17 h-17 bg-c_grey rounded-md"></div>
      </div>
    </div>

    <div class="flex items-center mt-10 gap-x-10 justify-center">
      <div class="flex flex-col items-center">
        <p
          class="p-4 rounded-full bg-yellow-300 mb-2"
          @click="openDrawCanvas">
          <i
            class="iconfont icon-baocun text-white"
            style="font-size: 18px"></i>
        </p>
        <p class="text-[14px] font-bold">保存图片</p>
      </div>
      <div
        class="flex flex-col items-center"
        @click="copy('分享', { msg: '链接已复制' })">
        <p class="p-4 rounded-full bg-c_theme/80 mb-2">
          <i
            class="iconfont icon-fenxiang text-white"
            style="font-size: 18px"></i>
        </p>
        <p class="text-[14px] font-bold">分享</p>
      </div>
    </div>

    <div class="mt-8 text-xs font-bold">
      <p class="text-c_theme/80 mb-1">
        注：严禁邀请自己的小号，包括但不限于同一设备、同一ip、同一支付宝账号、订单相同收货人和地址等，否则系统将拉黑账号并取消所有的奖励。
      </p>
      <p class="text-[#6a6a6a]">严禁将推广码发到优选官方微信群或其他优选推广员微信群，否则将取消推广资格。</p>
    </div>

    <CustomModal
      :show="showCanvasState"
      class="!w-88 !rounded-md !p-0 -translate-y-10">
      <div
        class="canvas-container rounded-md flex justify-center items-center"
        ref="canvasContainer"
        @click="onClickCanvas"></div>

      <div class="absolute -bottom-14 left-1/2 transition-transform -translate-x-1/2 flex items-center gap-x-3">
        <div
          class="rounded-full bg-[rgba(123,123,123,0.9)] p-2"
          @click="setCanvasState(false)">
          <van-icon
            name="cross"
            color="#ffffff"
            size="22px" />
        </div>
      </div>
    </CustomModal>
  </div>
</template>

<script setup lang="ts" name="Share">
  import html2canvas from 'html2canvas';
  import { ref } from 'vue';
  import copy from '/@/utils/copy';
  import { useLoading } from '/@/hooks';
  import Canvas2Image from '/@/utils/canvas2Image';

  const shareContainer = ref<HTMLElement | null>(null);
  const { loading: showCanvasState, setLoading: setCanvasState } = useLoading({ initValue: false });
  const canvasContainer = ref<HTMLElement | null>(null);

  const openDrawCanvas = async () => {
    setCanvasState(true);
    const res = await getShareImgBase64(shareContainer.value);
    res.setAttribute('id', 'canvasRef');
    canvasContainer.value?.appendChild(res);
  };

  function getShareImgBase64(container) {
    console.log('window.innerHeight - container.offsetHeight :>> ', window.innerHeight - container.offsetHeight);
    console.log('window.innerWidth - container.offsetWidth :>> ', window.innerWidth - container.offsetWidth);
    return new Promise((resolve: (HTMLCanvasElement) => void) => {
      setTimeout(() => {
        // #capture 就是我们要获取截图对应的 DOM 元素选择器
        html2canvas(container, {
          width: window.innerWidth - 40,
          height: container.offsetHeight,
          useCORS: true, // 【重要】开启跨域配置
          scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
          allowTaint: true, // 允许跨域图片
        }).then((canvas) => {
          resolve(canvas);
        });
      }, 300);
    });
  }

  type NavigatorModel = Navigator & { msSaveOrOpenBlob: any };
  function onClickCanvas() {
    const canvasRef = document.querySelector('#canvasRef')! as HTMLCanvasElement;
    var img_data1 = Canvas2Image.convertToImage('canvasRef', canvasRef.offsetWidth, canvasRef.offsetHeight, '.png');
    let src = img_data1?.getAttribute('src') ?? '';
    if ((window.navigator as NavigatorModel)?.msSaveOrOpenBlob) {
      var bstr = atob(src.split(',')[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      var blob = new Blob([u8arr]);
      (window.navigator as NavigatorModel).msSaveOrOpenBlob(blob, '霸王餐' + '.' + 'png');
    } else {
      // 这里就按照chrome等新版浏览器来处理
      const a = document.createElement('a');
      a.href = src;
      a.setAttribute('download', '霸王餐邀请海报');
      a.click();
    }
  }

  // function downloadFile(content, fileName) {
  //   //下载base64图片
  //   var base64ToBlob = function (code) {
  //     let parts = code.split(';base64,');
  //     let contentType = parts[0].split(':')[1];
  //     let raw = window.atob(parts[1]);
  //     let rawLength = raw.length;
  //     let uInt8Array = new Uint8Array(rawLength);
  //     for (let i = 0; i < rawLength; ++i) {
  //       uInt8Array[i] = raw.charCodeAt(i);
  //     }
  //     return new Blob([uInt8Array], {
  //       type: contentType,
  //     });
  //   };
  //   let aLink = document.createElement('a');
  //   let blob = base64ToBlob(content); //new Blob([content]);
  //   let evt = document.createEvent('HTMLEvents');
  //   evt.initEvent('click', true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  //   aLink.download = fileName;
  //   aLink.href = URL.createObjectURL(blob);
  //   aLink.click();
  // }
</script>

<style scoped>
  .box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>

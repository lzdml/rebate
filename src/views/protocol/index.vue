<template>
  <div class="container pt-14 px-4">
    <custom-header
      :title="title"
      :border="false"
      @click-left="router.back()" />
    <div class="bg-white rounded-md box p-4">
      <div class="rule">
        <div class="rule-title font-bold text-base mb-2">霸王餐优选详细报名须知</div>
        <div class="rule-item">确认店铺</div>
        <div class="rule-item">
          下单前请务必核对外卖平台，辨别店铺名称且核对店铺地址，请尽量使用提供的跳转进店下单功能，有疑问请联系在线客服核实，下错店铺不返现报销。
        </div>
        <div class="rule-item"></div>
        <div class="rule-item">餐品问题</div>
        <div class="rule-item">1.点餐过程中，如若有配送问题请联系骑手，餐品或包装问题联系商家处理。</div>
        <div class="rule-item">2.发生申请全额退款或理赔订单严禁提交返现，否则将拉黑处理。</div>
        <div class="rule-item">3.如部分退款，请截图退款详情一并上传,将从返利金额扣除。</div>
        <div class="rule-item"></div>
        <div class="rule-item">反馈要求</div>
        <div class="rule-item">
          1.活动中有明确图文要求的在上传试吃反馈订单时需满足图文要求，且不要上传与本店无关图片及反馈内容，才可获得返现优惠，并不可删除评价，否则将收回返利。
        </div>
        <div class="rule-item">
          2.不允许复制粘贴、灌水内容及与本次餐品无关内容进行用餐试吃反馈，否则将收回本单返利及限制报名需反馈活动。若评价显示"部分文字或图片已折叠隐藏展示”，将扣除部分返现。
        </div>
        <div class="rule-item"></div>
        <div class="rule-item">饮料限制</div>
        <div class="rule-item">
          除饮品店以外，任何店铺仅可随主食点一瓶酒水饮料，单点饮品或1瓶以上酒水饮料，酒水饮料费用将从返利金额中扣除，多次将禁止参与霸王餐活动。
        </div>
        <div class="rule-item"></div>
        <div class="rule-item">报名间隔</div>
        <div class="rule-item">一家店铺一天仅可报名一次，同个美团/饿了么账号也请勿连续下单，一个订单仅可提交一次。</div>
        <div class="rule-item"></div>
        <div class="rule-item">提交时限</div>
        <div class="rule-item">
          订单必须在报名后1小时内上传订单编号及订单截图，反馈截图必须在当日24点前提交（21点后报名的可次日9点前提交），不可隔天下单，下单后请务必在次日13点前提交状态为已完成订单，订单完成时间或下单时间晚于活动过期时间的一律作废，不可以先下单，再抢单，否则不返现报销。
        </div>
        <div class="rule-item"></div>
        <div class="rule-item">活动说明</div>
        <div class="rule-item">1.补贴金额以订单列表标注为准，首页金额会随时调整，补贴金额按报名时决定，后续状态变更不会影响补贴金额。</div>
        <div class="rule-item">
          2.此活动不与商家好评卡、到店自取及拼好饭活动同享，除门店商品外，随订单购买外卖平台会员加量包、美团会员、超值优惠券、准时宝将从返利金额中扣除。
        </div>
        <div class="rule-item"></div>
        <div class="rule-item">扣款金额</div>
        <div class="rule-item">1.无图或无字 - 扣5元</div>
        <div class="rule-item">2.反馈折叠 - 扣5元</div>
        <div class="rule-item">4.实付不满 - 扣不满部分（向上取整）</div>
        <div class="rule-item">4.24点前未提交反馈（21点后报名的除外）- 扣除2元</div>
        <div class="rule-item"></div>
        <div class="rule-item">禁用说明</div>
        <div class="rule-item">向商家索要返利、虚假订单、多平台返现、删除评价、多次实付不满、订单退款等包含但不限于，一经发现全网通报拉黑！</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Protocol">
  import { ProtocolEnum, ProtocolType } from '/@/model/enum';

  const router = useRouter();
  const route = useRoute();
  const type = (route.query.type as ProtocolEnum) ?? ProtocolEnum.privacy;
  const title = computed(() => ProtocolType[type]);
</script>

<style scoped>
  .box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>

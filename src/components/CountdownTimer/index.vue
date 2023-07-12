<template>
  <div :class="$attrs.class">
    <p>{{ formatTime }}</p>
  </div>
</template>

<script>
  import { ref, computed, onBeforeUnmount } from 'vue';

  export default {
    props: {
      time: {
        type: Number,
        required: true,
      },
      onCountdownEnd: {
        type: Function,
        default: () => {},
      },
    },
    setup(props) {
      const remainingTime = ref(props.time);
      let timer = null;

      const startCountdown = () => {
        remainingTime.value = props.time;

        timer = setInterval(() => {
          remainingTime.value -= 1;

          if (remainingTime.value <= 0) {
            clearInterval(timer);
            props.onCountdownEnd(); // 调用回调函数
          }
        }, 1000);
      };

      const formatTime = computed(() => {
        const hours = Math.floor(remainingTime.value / 3600);
        const minutes = Math.floor((remainingTime.value % 3600) / 60);
        const seconds = remainingTime.value % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      });

      onMounted(() => {
        startCountdown();
      });

      onBeforeUnmount(() => {
        clearInterval(timer);
      });

      return {
        formatTime,
        startCountdown,
      };
    },
  };
</script>

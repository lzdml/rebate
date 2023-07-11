import { onMounted, onUnmounted } from 'vue';

export default function useTouchFeedback(elementRef: Ref<HTMLElement | null>, ...rest) {
  const classes = ref<string[]>([]);
  const addActiveClass = () => {
    const button = elementRef.value;
    if (button) {
      classes.value = ['active', ...rest];
      if (classes.value.length <= 1) {
        button.classList.add('active');
      } else {
        classes.value.forEach((className) => {
          button.classList.add(className);
        });
      }
    }
  };

  const removeActiveClass = () => {
    const button = elementRef.value;
    if (button) {
      if (classes.value.length <= 1) {
        button.classList.remove('active');
      } else {
        classes.value.forEach((className) => {
          if (button.classList.contains(className)) {
            button.classList.remove(className);
          }
        });
      }
    }
  };

  const bindEvents = () => {
    const button = elementRef.value;
    console.log('button :>> ', button);
    if (button) {
      button.addEventListener('touchstart', addActiveClass, { passive: true });
      button.addEventListener('touchend', removeActiveClass, { passive: true });
      button.addEventListener('touchcancel', removeActiveClass, { passive: true });
    }
  };

  const unbindEvents = () => {
    const button = elementRef.value;
    if (button) {
      button.removeEventListener('touchstart', addActiveClass);
      button.removeEventListener('touchend', removeActiveClass);
      button.removeEventListener('touchcancel', removeActiveClass);
    }
  };

  onMounted(() => {
    console.log('object');
    bindEvents();
  });

  onUnmounted(() => {
    unbindEvents();
  });

  return {
    unbindEvents,
    bindEvents,
    removeActiveClass,
    addActiveClass,
  };
}

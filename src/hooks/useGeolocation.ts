const useGeolocation = () => {
  const latitude = ref(null);
  const longitude = ref(null);
  const desc = ref(null);
  const error = ref('');

  const handleSuccess = (position) => {
    latitude.value = position.coords.latitude;
    longitude.value = position.coords.longitude;
    desc.value = position.coords;
  };

  const handleError = (error) => {
    console.log('error :>> ', error);
    error.value = error.message;
  };

  onMounted(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      error.value = '浏览器不支持地理位置定位。';
    }
  });

  onUnmounted(() => {
    // 在组件卸载时清除事件监听或其他清理操作
  });

  return { latitude, longitude, error, desc };
};

export default useGeolocation;

<template>
  <div class="home-show">
    <img src="~@/assets/img/logo.png" alt="">
    <home-swiper></home-swiper>
    <img src="~@/assets/img/QRcode.jpg" alt="">
  </div>
</template>
 
<script>
import HomeSwiper from "../homeswiper/HomeSwiper"

export default {
  name: 'HomeShow',
  components: {
    HomeSwiper,
  },
}
</script>

<style scoped>
.home-show {
  display: flex;
  height: 270px;
}
.home-show > * {
  flex: 3 1 auto;
  width: 60%;
}
.home-show > img {
  flex: 1 1 auto;
  width: 20%;
  box-shadow: 0 10px 10px #806d9e;
}
</style>
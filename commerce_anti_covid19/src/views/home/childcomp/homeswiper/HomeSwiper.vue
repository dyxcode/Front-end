<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item>
        <img src="~@/assets/img/yichang3.png" alt />
      </swiper-item>
      <swiper-item>
        <img src="~@/assets/img/wuhan2.jpg" alt />
      </swiper-item>
      <swiper-item>
        <img src="~@/assets/img/yichang1.png" alt />
      </swiper-item>
      <swiper-item>
        <img src="~@/assets/img/yichang2.jpg" alt />
      </swiper-item>
    </swiper>
  </div>
</template>
 
<script>
import { Swiper, SwiperItem } from "../../../../components/common/swiper/index";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.home-swiper {
  height: 100%;
}
img {
  height: 270px;
  background-size: 100% 100%;
}
</style>
<template>
  <div>
    <p>正在直播：</p>
    <img src="~@/assets/img/broadcast.jpg" alt="">
    <a>点击这里进入直播间</a>
  </div>
</template>
 
<script>
export default {
  name: 'HomeBroadcast',
}
</script>

<style scoped>
div {
  width: 100%;
  text-align: center;
  margin-top: 50px;
}
p {
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 1000;
}
img {
  width: 100%;
  height: 300px;
}
a {
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
  font-weight: 1000;
  line-height: 50px;
  color: #2e317c;
}
</style>
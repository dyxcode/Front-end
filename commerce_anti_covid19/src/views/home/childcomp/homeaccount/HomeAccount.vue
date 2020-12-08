<template>
  <div class="account">
    <img src="~@/assets/img/head.jpg" alt />
    <p>您好，尊敬的三创赛</p>
    <div class="func">
      <p>1</p><p>待收货</p>
      <p>2</p><p>待发货</p>
      <p>0</p><p>代付款</p>
      <p>2</p><p>待评价</p>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "HomeAccount"
};
</script>

<style scoped>
.account {
  width: 100%;
  text-align: center;
}

.account > img {
  margin: 20px 0px 10px;
  width: 30%;
  border-radius: 50%;
}
.account > p {
  font-size: 20px;
  margin-bottom: 20px;
}

.func {
  display: flex;
  align-items: space-around;
  flex-flow: column wrap;
  margin-top: 20px;
  height: 60px;
}
.func p {
  height: 50%;
}
.func p:nth-child(odd) {
  font-weight: 1000;
  color: #cc163a;
}
</style>
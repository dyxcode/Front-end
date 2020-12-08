<template>
  <div class="home-project">
    <span>旅游文创</span>
    <span>手工工艺</span>
    <span>特色农货</span>
    <span>水果生鲜</span>
    <span>秘制美食</span>
    <span>慈善帮扶</span>
  </div>
</template>
 
<script>
export default {
  name: "HomeProject"
};
</script>

<style scoped>
.home-project {
  display: flex;
  height: 100%;
  flex-flow: column;
  justify-content: space-around;
}
span {
  width: 100%;
  text-align: center;
  font-size: 20px;
  background-color: #ffa60f;
  line-height: 30px;
  box-shadow: 0 0 20px #b4a992 inset;
  cursor: pointer;
}
</style>
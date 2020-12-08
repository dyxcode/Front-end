<template>
  <div class="search">
    <div class="top">
      <span>鄂行天下</span>
      <span>旅游文创</span>
      <span>手工工艺</span>
      <span>特色农货</span>
      <span>水果生鲜</span>
      <span>秘制美食</span>
      <span>慈善帮扶</span>
    </div>
    <div class="mid">
      <p>产地：</p>
      <span v-for="item in cities" :key="item">{{ item }}</span>
    </div>
    <div class="bottom">
      <img src="../../assets/img/juzi1.png" alt="">
      <img src="../../assets/img/juzi2.png" alt="">
      <img src="../../assets/img/juzi3.png" alt="">
      <img src="../../assets/img/juzi4.png" alt="">
      <img src="../../assets/img/juzi5.png" alt="">
      <img src="../../assets/img/juzi6.png" alt="">
      <img src="../../assets/img/juzi7.png" alt="">
      <img src="../../assets/img/juzi8.png" alt="">
      <img src="../../assets/img/juzi9.png" alt="">
      <img src="../../assets/img/juzi10.png" alt="">
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Search',
  data() {
    return {
      cities: ['武汉市','黄石市','十堰市','宜昌市','襄阳市','鄂州市','荆门市','孝感市','荆州市','黄冈市','咸宁市','随州市','大冶市','丹江口市','宜都市','当阳市','枝江市','老河口市','枣阳市','宜城市','钟祥市','京山市','应城市','安陆市','汉川市','石首市','洪湖市','松滋市','麻城市','武穴市','赤壁市','广水市','恩施市','利川市','仙桃市','潜江市','天门市']
    }
  }
}
</script>

<style scoped>
.top {
  width: 80%;
  margin-left: 10%;
  padding-top: 20px;
}
.top span:nth-child(1) {
  margin-right: 25px;
  font-size: 40px;
  color: tomato;
  font-family: cursive;
  font-weight: 800;
}
.top span {
  margin-left: 25px;
  font-size: 20px;
  cursor: pointer;
}

.mid {
  width: 90%;
  margin-left: 5%;
  padding-top: 30px;
}
.mid p {
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  border: none;
}
.mid span {
  border-left: solid 2px #f6cec1;
  padding: 0 19px;
  line-height: 30px;
  cursor: pointer;
}
.mid span:nth-child(2) {
  padding-left: 0;
  border: none;
}

.bottom {
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  border-top: solid 2px #ccc;
  padding-top: 20px;
}
.bottom img {
  width: 18%;
  margin-bottom: 20px;
}
</style>
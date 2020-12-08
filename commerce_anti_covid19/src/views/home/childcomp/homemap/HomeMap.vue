<template>
  <div class="home-map" ref="content"></div>
</template>
 
<script>
const hubeiJson = require("@/assets/js/hubei");
export default {
  name: "HomeMap",
  mounted() {
    this.$echarts.registerMap("hubei", hubeiJson);
    let chart = this.$echarts.init(this.$refs.content);

    chart.setOption({
      series: [
        {
          type: "map",
          map: "hubei",
          width: "100%",
          height: "100%",
          itemStyle: {
            areaColor: "#f19790"
          },
          emphasis: {
            itemStyle: {
              areaColor: "#ed4845"
            }
          },
          label: {
            show: true, 
            fontSize: 12,
            fontWeight: "bold",
            color: "#806332"
          }
        }
      ]
    });
    // 图表跟随屏幕自适应
    window.addEventListener("resize", function() {
      chart.resize();
    });

    chart.on('click', param => {
      if (param.name == '宜昌市')
        this.$router.push('/city/yichang')
      if (param.name == '武汉市')
        this.$router.push('/city/wuhan')
    })
  }
};
</script>

<style scoped>
.home-map {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  transform: translate(0, 80px);
}
</style>
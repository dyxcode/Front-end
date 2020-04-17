new Vue({
  el: '#app',
  data: {
    starCount: 800,
    distance: 800
  },
  mounted() {
    let starArr = this.$refs.star
    starArr.forEach(item => {
      let speed = 0.2 + Math.random()
      let nowDistance = this.distance + Math.random() * 300 
      item.style.transformOrigin = `0 0 ${nowDistance}px`
      item.style.transform = `translate3d(0, 0, -${nowDistance}px)
                              rotateY(${(Math.random() * 360)}deg)
                              rotateX(${(Math.random() * 360)}deg)
                              scale(${speed}, ${speed})`

    });
  },
})
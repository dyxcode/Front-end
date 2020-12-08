<template>
  <div id="home">
    <home-show></home-show>
    <body>
      <div class="left">
        <home-project></home-project>
      </div>
      <div class="mid">
        <home-map></home-map>
      </div>
      <div class="right">
        <home-account v-if="this.$store.state.is_login"></home-account>
        <home-unlogin v-else></home-unlogin>
        <home-broadcast></home-broadcast>
      </div>
    </body>
  </div>
</template>
 
<script>
import HomeShow from "./childcomp/homeshow/HomeShow"
import HomeMap from "./childcomp/homemap/HomeMap"
import HomeProject from "./childcomp/homeproject/HomeProject"
import HomeAccount from "./childcomp/homeaccount/HomeAccount"
import HomeUnlogin from "./childcomp/homeunlogin/HomeUnlogin"
import HomeBroadcast from "./childcomp/homebroadcast/HomeBroadcast"

export default {
  name: 'Home',
  components: {
    HomeShow,
    HomeMap,
    HomeProject,
    HomeAccount,
    HomeUnlogin,
    HomeBroadcast
  },
  data() {
    return {
    }
  }
}
</script>
 
<style scoped>
#home {
  background-color: #bdaead;
}
body {
  display: flex;
}
.left {
  flex: 1 1 auto;
  width: 10%;
}
.mid {
  flex: 2 1 auto;
  width: 50%;
}
.right {
  flex: 1 1 auto;
  width: 10%;
}
</style>
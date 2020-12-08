<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li><router-link to="/forum">论坛</router-link></li>
      <li>直播</li>
      <li class="holdplace">
        <input type="text" placeholder="请输入查询内容" 
              @keypress.enter="gotoSearch"/>
      </li>
      <li>购物车</li>
      <li>收藏夹</li>
      <li>积分商城</li>
      <li @click="is_show = !is_show">个人中心</li>
    </ul>
    <template v-if="is_show">
      <div class="register">
        <input type="text" placeholder="请输入账号"/>
        <input type="password" placeholder="请输入密码" />
        <img class="account" src="../../../assets/img/account.svg" alt="">
        <img class="password" src="../../../assets/img/password.svg" alt="">
        <button @click.once="changeLoginState">登录</button>
        <button>注册</button>
      </div>
    </template>
  </div>
</template>
 
<script>
export default {
  name: "Navbar",
  data() {
    return {
      is_show: false
    }
  },
  methods: {
    changeLoginState() {
      this.$store.state.is_login = true;
    },
    gotoSearch() {
      this.$router.push('/search')
    }
  }
};
</script>
 
<style scoped>
.navbar {
  /* position: relative;
  display: flex;
  justify-content: space-around; */
  height: 30px;
  line-height: 30px;
  background: #a7535a;
  z-index: 1;
}
.navbar * {
  text-align: center;
  color: #f1f0ed;
}
.navbar > ul {
  display: flex;
  justify-content: space-around;
  vertical-align: middle;
}
.navbar > ul > li {
  width: 70px;
  cursor: pointer;
  flex: 1 1 auto;
}
.navbar .holdplace {
  position: relative;
  flex: 10 1 auto;
}
.navbar input {
  width: 100%;
  color: #666;
  text-align: left;
}
.holdplace::after {
  display: block;
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  top: 5px;
  right: 0px;
  background: url("../../../assets/img/搜索.svg") no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}
.register {
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  top: 30px;
  right: 0;
  background-color: #207f4c;
  opacity: 0.9;
}
.register * {
  color: #5c3719;
  margin-top: 5px;
}
.register input {
  width: 85%;
  margin-left: 15%;
  text-align: left;
}

.account {
  position: absolute;
  width: 20px;
  height: 20px;
}
.password {
  position: absolute;
  top: 25px;
  width: 22px;
  height: 22px;
}
</style>
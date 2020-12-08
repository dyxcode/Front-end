<template>
  <div class="forum">
    <div class="top">
      <div class="citys" v-for="(item, index) in citys" :key="index">
        <p>{{ citys[index] }}</p>
        <p>【{{ sights1[index] }}】</p>
        <p>【{{ sights2[index] }}】</p>
        <p>......</p>
      </div>
    </div>
    <div class="split"></div>
    <div class="bottom">
      <div class="commands" v-for="(item, index) in commands" :key="index">
        <span class="no">{{ index }}</span>
        <span class="command">{{ commands[index] }}</span>
        <span class="user">用户: {{ username[index] }}</span>
      </div>
    </div>
    <div class="input">
      <span>评论：</span>
      <input v-model="message" @keyup.enter="submitCommand"/>
      <span class="submit" @click="submitCommand">提交</span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Forum',
  data() {
    return {
      citys: ['宜昌','武汉','十堰','襄阳','荆州','恩施','随州','孝感','黄冈','咸宁'],
      sights1: ['清江画廊','黄鹤楼','武当山','古隆中','荆州博物馆','恩施大峡谷','千年银杏谷','观音湖','大别山','三国赤壁古战场'],
      sights2: ['三峡人家','户部巷','丹江口大坝','襄阳古城','荆州古城墙','恩施女儿城','炎帝神农故里','董永公园','三角山','九宫山'],
      commands: ['真好三峡大坝绝美！！！此生不去必留遗憾','屈原祠 长叹息以掩涕兮，哀民生之多艰 感受到了当年屈原为国为民的气魄','真心强烈推荐清江画廊！！ 看清江水，品清江鱼感受大自然给我们的馈赠','大国重器，三峡大坝！！！！感受世界第一大水电站的魄力，感觉中国是占领在世界之巅的国家  我爱中国','急需！！求大家给一个5天左右的宜昌旅游攻略，还有宜昌有什么好吃的吗？想吃','夏天去宜昌百里荒漂流，简直是每年必去的避暑游玩项目。真心推荐大家去玩一玩！！','三峡大学桃花节超级棒！！！爆赞好多外国留学生  好多好看的小姐姐  感觉就是三峡大学的“春节” 真的太好玩了吧'],
      username: ['问题不大','回忆若乘风','真实爆单','ITTR','安度因的弟弟','eg.','石城'],
      message: ""
    }
  },
  methods: {
    submitCommand() {
      this.commands.unshift(this.message);
      this.username.unshift('三创赛');
      this.message = ''
    }
  }
}
</script>

<style scoped>
.forum {
  background-color: #bdaead;
}
.top {
  display: flex;
  width: 80%;
  margin-left: 10%;
  height: 300px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.citys {
  flex: 0 1 auto;
  width: 17%;
}
.citys:nth-child(odd) {
  background-image: linear-gradient(#d8e3e7, #bdaead);
}
.citys:nth-child(even) {
  background-image: linear-gradient(#bdaead, #d8e3e7);
}
.citys p {
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

.split {
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
  border: 2px solid #5698c3;
}

.commands {
  width: 80%;
  margin-left: 10%;
  line-height: 50px;
  clear: both;
}
.commands:nth-child(even) {
  background-color: #8b6457;
  color: #ccc;
}
.commands .no {
  padding-left: 10px;
  color: #b14b28;
  font-size: 20px;
  vertical-align: middle;
}
.commands .command {
  margin-left: 20px;
  padding-left: 20px;
  border-left: 2px solid #eea08c;
}
.commands .user {
  float: right;
  padding-right: 10px;
}

.input {
  width: 80%;
  margin-left: 10%;
  font-size: 18px;
  padding: 30px 0;
  clear: both;
}
.input input {
  width: 88%;
  color: #222;
}
.input .submit {
  float: right;
  padding-right: 10px;
}
.input .submit:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
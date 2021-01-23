<template>
  <div id="app">
    <div id="nav">
       <a href="#" class="logo">
         <img src="../src/assets/logo.png" alt="">
       </a>
       <div class="nav-r">
          <el-menu
              class="el-menu-demo"
              mode="horizontal"
              text-color="#000"
              :default-active="activeIndex"
              active-text-color="#2a62ff"
               @select="handleSelect"
              :router="true"
            >
              <el-menu-item index="/home">首页</el-menu-item>
              <el-menu-item index="/teenTrain">青少年篮球培训</el-menu-item>
              <el-menu-item index="/venue">场馆租赁</el-menu-item>
              <el-menu-item index="/study">营训游学</el-menu-item>
              <el-menu-item index="/match">UCBA超级联赛</el-menu-item>
              <el-menu-item index="/brand">品牌动态</el-menu-item>
              <el-menu-item index="/about">关于优肯</el-menu-item>
              <el-menu-item index="/video">精彩视频</el-menu-item>
              <el-menu-item index="8" disabled>0371-666888</el-menu-item>
            </el-menu>
       </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <gongyong></gongyong>
    <zixun ref="zixunForm"></zixun>
    <reservation ref="reservation"></reservation>
  </div>
</template>
<script>
import gongyong from './components/gongyong'
import zixun from './components/zixun'
import reservation from './components/reservation'
export default {
  data(){
    return {
      activeIndex:this.$route.path
    }
  },
  components:{
    gongyong,
    zixun,
    reservation,
  },
  methods:{
    handleSelect(key,kayPath){
        // console.log(key)
        // console.log(keyPath)
    },
    showPage1(){
       this.$refs.zixunForm.showPage()
    },
    showPage2(){
       this.$refs.reservation.showRes()
    }
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
 width: 100%;
 #nav{
   height:80px;
   padding-left:200px;
   display: flex;
   .logo{
     width: 400px;
     padding-top: 10px;
     img{
       width: 100%;
     }
   }
   .nav-r{
     flex: 1;
     .el-menu{
       height: 100%;
       background-color:transparent;
     }
     .el-menu--horizontal{
         border-bottom: none;
       }
      .el-menu--horizontal>.el-menu-item.is-active{
         background-color:transparent; 
      }
      .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
         background-color:transparent;
      } 
     .el-menu-item{
       padding: 0 10px;
       height: 100%;
       line-height: 83px;
       font-size: 16px;
     }
   }
 }

}
</style>

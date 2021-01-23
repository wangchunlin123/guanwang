<template>
    <div id="study">
        <div class="banner">
             <img src="../assets/yxy.jpg" alt="">
        </div>
        <ul class="main">
            <li v-for="item in pic" :key="item.id">
                <img :src="item.url" alt="">
            </li>
        </ul>
         <footerPage></footerPage>
    </div>
</template>
<script>
import footerPage from '../components/footer'
export default {
    data(){
        return {
            pic:[
                {id:1,url:require('../assets/get.jpg')},
                {id:2,url:require('../assets/hainan.jpg')},
                {id:3,url:require('../assets/linan.jpg')},
                {id:4,url:require('../assets/zhaoqiang.jpg')},
                {id:5,url:require('../assets/sewy.jpg')},
                {id:6,url:require('../assets/meiguo.jpg')}
            ]
        }
    },
    components: {
       footerPage,  
    }
}
</script>
<style lang="less">
#study{
    width: 100%;
    .banner{
        width: 100%;
        margin-bottom: 70px;
        img{
            width: 100%;
        }
    }
    ul.main{
      width: 66%;
      margin: auto;
      display: flex;
      justify-content:space-between;
      flex-wrap: wrap;
      li{
         width: 50%;
         padding: 20px;
         img{
             width: 100%;
         }
      }
    }

}
</style>



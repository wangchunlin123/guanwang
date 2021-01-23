<template>
  <div id="gongyong">
    <div class="zixun" @click="zixun">
      <img src="../assets/online.png">
      <span>在线咨询</span>
    </div>
    <div class="yuyue" @click="reservation">
      <img src="../assets/yuyue.png">
      <span>立即预约</span>
    </div>
    <div class="erweima">
      <img src="../assets/wx.png">
      <span>微信服务</span>
      <div class="alertBox">
           <div class="imgContent">
             <img src="../assets/wx.jpg">
             <img src="../assets/xcx.jpg">
           </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
         zixun(){
           this.$parent.showPage1()
         },
         reservation(){
           this.$parent.showPage2()
         } 
    }
};
</script>
<style lang="less">
#gongyong {
  position: fixed;
  z-index: 9999;
  width: 80px;
  height: 270px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.4) inset;
  border-radius: 36px;
  right: 20px;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
  .zixun,
  .yuyue,
  .erweima {
    width: 100%;
    height: 90px;
    img {
      display: block;
      margin: auto;
      padding: 20px 0 3px 0;
    }
    span {
      display: block;
      font-size: 12px;
      font-weight: 900;
      color: #999;
    }
  }
  .erweima {
    position: relative;
    .alertBox {
      width:0;
      height: 180px;
      position: absolute;
      top: 0;
      right: 90px;
      overflow: hidden;
      transition: all 1s;
      .imgContent{
          width:270px;
          height: 180px;
          // position: absolute;
          // top: 0;
          // right:0px;
          img{
           display: inline-block;
          }
      }
    }
  }
  .erweima:hover .alertBox{
      width: 270px;
  }
  // .erweima:hover .imgContent{
  //     right:0;

  // }
}
</style>
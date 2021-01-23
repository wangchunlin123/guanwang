<template>
    <div id="home">
          <video
            muted
            data-autoplay
            loop="loop"
            autoplay="autoplay"
          > 
            <source src="https://video.ycanedu.com/video/xcp/pc_bg/bg1_zhong.mp4" type="video/mp4"  />
          </video>
         <div class="title">
           培养身能心能的<span>阳光少年</span>
         </div>
          <div class="footer">
             <span>2019&copy;优肯教育 | 北京优肯阳光网络教育科技有限公司 | 京ICP备18044245号-1</span>
             <span>电话：400-6817-400  | 地址：北京市海淀区中关村E世界A座  | 邮箱：service@youcanyoudo.com</span>
          </div>
          
    </div>
</template>
<script>
export default {
    data(){
        return {
        
        }
    },
    created(){
    },
    methods:{
    }
    
}
</script>
<style lang="less">
#home{
    width: 100%;
    height: 100%;
    video{
          position: fixed;
          right:0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          z-index: -9999;
      }
     .title{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 80px;
        font-weight: blod;
        color: #fff;
        span{
            display: inline-block;
            background-color: #fff;
            color: #4668A8;
            border-top-right-radius: 10px;
            border-bottom-right-radius:10px; 
            font-weight: normal;
            margin-left: 5px;
        }
      }
      .footer{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        span{
            display: block;
            text-align: center;
            color: #fff;
            line-height: 25px;
            font-size: 14px;
        }
    }
    
}
    
</style>
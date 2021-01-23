<template>
    <div id="brand">
        <div class="pic">
            <img src="../assets/pinpai.jpg" alt="">
        </div>
        <div class="info">
            <div class="small_ball">
                <h4>小篮球</h4>
                <ul>
                    <li v-for="item in ballInfo" :key="item.id">
                        <a target="blank" :href="item.url">{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <div class="brand_info">
                <h4>品牌</h4>
                <ul >
                    <li v-for="items in brandInfo" :key="items.id">
                        <a target="blank" :href="items.url">{{items.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <footerPage></footerPage>
    </div>
</template>
<script>
import footerPage from '../components/footer'
export default {
   components:{
    footerPage,
  },
  data(){
      return{
          ballInfo:[
              {id:1,url:'https://mp.weixin.qq.com/s/u_-Osg3zRxXVQf-cnJ-k2w',title:'海拔3650米的“纯粹热爱” ——京藏”小篮球，大梦想”系列活动'},
              {id:2,url:'https://mp.weixin.qq.com/s/FEQDlXji1K2y2m7HCSbAfQ',title:'优肯不停歇丨助力中国小篮球联赛，让少儿篮球回归本质'},
              {id:3,url:'https://mp.weixin.qq.com/s/wu2O5iVt_FfdgXKbk2K1_A',title:'拼搏青春——优肯出征"小篮球"联赛北京决赛'},
              {id:4,url:'https://mp.weixin.qq.com/s/u_-Osg3zRxXVQf-cnJ-k2w',title:'海拔3650米的“纯粹热爱” ——京藏”小篮球，大梦想”系列活动'},
              {id:5,url:'https://mp.weixin.qq.com/s/FEQDlXji1K2y2m7HCSbAfQ',title:'优肯不停歇丨助力中国小篮球联赛，让少儿篮球回归本质'},
              {id:6,url:'https://mp.weixin.qq.com/s/wu2O5iVt_FfdgXKbk2K1_A',title:'拼搏青春——优肯出征"小篮球"联赛北京决赛'},
              {id:7,url:'https://mp.weixin.qq.com/s/u_-Osg3zRxXVQf-cnJ-k2w',title:'海拔3650米的“纯粹热爱” ——京藏”小篮球，大梦想”系列活动'},
              {id:8,url:'https://mp.weixin.qq.com/s/FEQDlXji1K2y2m7HCSbAfQ',title:'优肯不停歇丨助力中国小篮球联赛，让少儿篮球回归本质'},
              {id:9,url:'https://mp.weixin.qq.com/s/wu2O5iVt_FfdgXKbk2K1_A',title:'拼搏青春——优肯出征"小篮球"联赛北京决赛'},
          ],
          brandInfo:[
              {id:1,url:'https://mp.weixin.qq.com/s/H7ugEfRuaooyTvnZC-GfoA',title:'让平凡伟大！优肯荣获2018体育产业最佳体育培训机构奖'},
              {id:2,url:'https://mp.weixin.qq.com/s/plDFp8WcORhW2zwRaXxANA',title:'荣耀之光！优肯UCBA超级联赛获评中国篮协年度最受欢迎青少年业余赛事！'},
              {id:3,url:'https://mp.weixin.qq.com/s/H7ugEfRuaooyTvnZC-GfoA',title:'让平凡伟大！优肯荣获2018体育产业最佳体育培训机构奖'},
              {id:4,url:'https://mp.weixin.qq.com/s/plDFp8WcORhW2zwRaXxANA',title:'荣耀之光！优肯UCBA超级联赛获评中国篮协年度最受欢迎青少年业余赛事！'},
              {id:5,url:'https://mp.weixin.qq.com/s/H7ugEfRuaooyTvnZC-GfoA',title:'让平凡伟大！优肯荣获2018体育产业最佳体育培训机构奖'},
              {id:6,url:'https://mp.weixin.qq.com/s/plDFp8WcORhW2zwRaXxANA',title:'荣耀之光！优肯UCBA超级联赛获评中国篮协年度最受欢迎青少年业余赛事！'},
              {id:7,url:'https://mp.weixin.qq.com/s/H7ugEfRuaooyTvnZC-GfoA',title:'让平凡伟大！优肯荣获2018体育产业最佳体育培训机构奖'},
              {id:8,url:'https://mp.weixin.qq.com/s/plDFp8WcORhW2zwRaXxANA',title:'荣耀之光！优肯UCBA超级联赛获评中国篮协年度最受欢迎青少年业余赛事！'},
              {id:9,url:'https://mp.weixin.qq.com/s/H7ugEfRuaooyTvnZC-GfoA',title:'让平凡伟大！优肯荣获2018体育产业最佳体育培训机构奖'}
          ]
      }
  }
}
</script>
<style lang="less">
#brand{
    width: 100%;
    .pic{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .info{
        width: 66%;
        margin: auto;
        padding: 50px 0;
        .small_ball,.brand_info{
            width: 100%;
            h4{
                width: 100%;
                text-align: center;
                line-height: 32px;
                font-size: 32px;
                font-weight: normal;
            }
            ul{
                width: 100%;
                padding: 20px 0;
                li{
                    padding: 5px 0;
                    border-bottom: 1px solid #ccc;
                    a{
                        color: #666;
                        text-decoration: none;
                        font-size: 18px;
                    }
                }
                li:hover a{
                    // font-size: 20px;
                    color: #409EFF;
                }
            }

        }
    }
}

</style>



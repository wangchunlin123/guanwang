<template>
  <div id="match">
    <el-carousel height="800px">
      <el-carousel-item v-for="item in pic" :key="item.id">
        <img :src="item.url" alt>
      </el-carousel-item>
    </el-carousel>
    <div class="news">
      <h4>联赛资讯</h4>
      <div class="U8_12">
        <ul class="U_num" v-for="item in news" :key="item.name">
          <p>{{item.name}}</p>
          <li v-for="items in item.hrefs" :key="items.id">
            <a :href="items.url" target="blank">{{items.title}}</a>
          </li>
        </ul>
      </div>
      <div class="video_pic">
        <!--轮播-->
        <el-carousel class="com-pic" direction="vertical" arrow="never">
          <el-carousel-item v-for="item in swiperPic" :key="item.id">
            <a :href="item.url" target="blank">
              <img :src="item.img" alt>
              <h5>{{item.name}}</h5>
            </a>
          </el-carousel-item>
        </el-carousel>
        <!-- 视频 -->
        <div class="com-video">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
        </div>
      </div>
    </div>
     <footerPage></footerPage>
  </div>
</template>
<script>
import footerPage from '../components/footer'
export default {
  data() {
    return {
      pic: [
        { id: 1, url: require("../assets/banner4.jpg") },
        { id: 2, url: require("../assets/banner5.jpg") },
        { id: 3, url: require("../assets/banner6.jpg") },
        { id: 4, url: require("../assets/banner7.jpg") },
        { id: 5, url: require("../assets/banner8.jpg") }
      ],
      news: [
        {
          name: "U12组别",
          hrefs: [
            {
              id: 1,
              url: "https://mp.weixin.qq.com/s/CMrXKyctYGDeSC6rGrQG9Q",
              title:
                "优肯UCBA S2 U10 季后赛丨28+19！工大惊现小威少；魔咒！东西部第4皆翻车！"
            },
            {
              id: 2,
              url: "https://mp.weixin.qq.com/s/tq8wD7I0_UT2XDXaQNYXRA",
              title:
                "优肯UCBA S2 U10 季后赛丨惊险！野马1分险胜战狼；稳定！飓风连续2季杀入西决！"
            },
            {
              id: 3,
              url: "https://mp.weixin.qq.com/s/_xaKPw5KTWe9shz4c7qFHw",
              title:
                "优肯UCBA S2 U10 分区决赛丨Got it！汪牛准绝杀，野马晋级；飓风加时胜小树！"
            },
            {
              id: 4,
              url: "https://mp.weixin.qq.com/s/L7YJdpIPfqhrkSdApwSKYw",
              title:
                "优肯UCBA-STORY 用心倾听丨清华晨曦，I love you 3000 times！"
            },
            {
              id: 5,
              url: "https://mp.weixin.qq.com/s/CMrXKyctYGDeSC6rGrQG9Q",
              title:
                "优肯UCBA S2 U10 季后赛丨28+19！工大惊现小威少；魔咒！东西部第4皆翻车！"
            },
            {
              id: 6,
              url: "https://mp.weixin.qq.com/s/tq8wD7I0_UT2XDXaQNYXRA",
              title:
                "优肯UCBA S2 U10 季后赛丨惊险！野马1分险胜战狼；稳定！飓风连续2季杀入西决！"
            },
            {
              id: 7,
              url: "https://mp.weixin.qq.com/s/_xaKPw5KTWe9shz4c7qFHw",
              title:
                "优肯UCBA S2 U10 分区决赛丨Got it！汪牛准绝杀，野马晋级；飓风加时胜小树！"
            },
            {
              id: 8,
              url: "https://mp.weixin.qq.com/s/L7YJdpIPfqhrkSdApwSKYw",
              title:
                "优肯UCBA-STORY 用心倾听丨清华晨曦，I love you 3000 times！"
            }
          ]
        },
        {
          name: "U10组别",
          hrefs: [
            {
              id: 1,
              url: "https://mp.weixin.qq.com/s/CMrXKyctYGDeSC6rGrQG9Q",
              title:
                "优肯UCBA S2 U10 季后赛丨28+19！工大惊现小威少；魔咒！东西部第4皆翻车！"
            },
            {
              id: 2,
              url: "https://mp.weixin.qq.com/s/tq8wD7I0_UT2XDXaQNYXRA",
              title:
                "优肯UCBA S2 U10 季后赛丨惊险！野马1分险胜战狼；稳定！飓风连续2季杀入西决！"
            },
            {
              id: 3,
              url: "https://mp.weixin.qq.com/s/_xaKPw5KTWe9shz4c7qFHw",
              title:
                "优肯UCBA S2 U10 分区决赛丨Got it！汪牛准绝杀，野马晋级；飓风加时胜小树！"
            },
            {
              id: 4,
              url: "https://mp.weixin.qq.com/s/L7YJdpIPfqhrkSdApwSKYw",
              title:
                "优肯UCBA-STORY 用心倾听丨清华晨曦，I love you 3000 times！"
            },
            {
              id: 5,
              url: "https://mp.weixin.qq.com/s/CMrXKyctYGDeSC6rGrQG9Q",
              title:
                "优肯UCBA S2 U10 季后赛丨28+19！工大惊现小威少；魔咒！东西部第4皆翻车！"
            },
            {
              id: 6,
              url: "https://mp.weixin.qq.com/s/tq8wD7I0_UT2XDXaQNYXRA",
              title:
                "优肯UCBA S2 U10 季后赛丨惊险！野马1分险胜战狼；稳定！飓风连续2季杀入西决！"
            },
            {
              id: 7,
              url: "https://mp.weixin.qq.com/s/_xaKPw5KTWe9shz4c7qFHw",
              title:
                "优肯UCBA S2 U10 分区决赛丨Got it！汪牛准绝杀，野马晋级；飓风加时胜小树！"
            },
            {
              id: 8,
              url: "https://mp.weixin.qq.com/s/L7YJdpIPfqhrkSdApwSKYw",
              title:
                "优肯UCBA-STORY 用心倾听丨清华晨曦，I love you 3000 times！"
            }
          ]
        },
        {
          name: "U8组别",
          hrefs: [
            {
              id: 1,
              url: "https://mp.weixin.qq.com/s/CMrXKyctYGDeSC6rGrQG9Q",
              title:
                "优肯UCBA S2 U10 季后赛丨28+19！工大惊现小威少；魔咒！东西部第4皆翻车！"
            },
            {
              id: 2,
              url: "https://mp.weixin.qq.com/s/tq8wD7I0_UT2XDXaQNYXRA",
              title:
                "优肯UCBA S2 U10 季后赛丨惊险！野马1分险胜战狼；稳定！飓风连续2季杀入西决！"
            },
            {
              id: 3,
              url: "https://mp.weixin.qq.com/s/_xaKPw5KTWe9shz4c7qFHw",
              title:
                "优肯UCBA S2 U10 分区决赛丨Got it！汪牛准绝杀，野马晋级；飓风加时胜小树！"
            },
            {
              id: 4,
              url: "https://mp.weixin.qq.com/s/L7YJdpIPfqhrkSdApwSKYw",
              title:
                "优肯UCBA-STORY 用心倾听丨清华晨曦，I love you 3000 times！"
            },
            {
              id: 5,
              url: "https://mp.weixin.qq.com/s/CMrXKyctYGDeSC6rGrQG9Q",
              title:
                "优肯UCBA S2 U10 季后赛丨28+19！工大惊现小威少；魔咒！东西部第4皆翻车！"
            },
            {
              id: 6,
              url: "https://mp.weixin.qq.com/s/tq8wD7I0_UT2XDXaQNYXRA",
              title:
                "优肯UCBA S2 U10 季后赛丨惊险！野马1分险胜战狼；稳定！飓风连续2季杀入西决！"
            },
            {
              id: 7,
              url: "https://mp.weixin.qq.com/s/_xaKPw5KTWe9shz4c7qFHw",
              title:
                "优肯UCBA S2 U10 分区决赛丨Got it！汪牛准绝杀，野马晋级；飓风加时胜小树！"
            },
            {
              id: 8,
              url: "https://mp.weixin.qq.com/s/L7YJdpIPfqhrkSdApwSKYw",
              title:
                "优肯UCBA-STORY 用心倾听丨清华晨曦，I love you 3000 times！"
            }
          ]
        }
      ],
      swiperPic: [
        {
          id: 1,
          name: "You do you can！优肯UCBA超级联赛S2赛季动真格！",
          url: "https://mp.weixin.qq.com/s/niO4lBZRTclvyETY8Zugpw",
          img: require("../assets/s1.jpg")
        },
        {
          id: 2,
          name: "优肯UCBA S2赛季丨动真格，胜利的曙光在前方！",
          url: "https://mp.weixin.qq.com/s/QoUh9PpXg_S81mmRrdEOaA",
          img: require("../assets/s2.jpg")
        },
        {
          id: 3,
          name: "You do you 细节化优肯UCBA S2赛季丨远不止胜负！",
          url: "https://mp.weixin.qq.com/s/zF2nMfWMvc0hZupe3PX5kA",
          img: require("../assets/s3.jpg")
        },
        {
          id: 4,
          name: "优肯UCBA S2丨致参赛运动员及家长的一份信",
          url: "https://mp.weixin.qq.com/s/uJtacmifAtaVWaG3i6bc6A",
          img: require("../assets/s4.jpg")
        },
        {
          id: 5,
          name: "优肯UCBA S2开幕式丨榜样空降！朝着曙光迈进！",
          url: "https://mp.weixin.qq.com/s/ALq1IbQXw_8nkqwywFuQcQ",
          img: require("../assets/s5.jpg")
        }
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: require('../assets/补充.mp4') //视频url地址
          }
        ],
        poster: require('../assets/video_img.png'), //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  components:{
    footerPage,
  }
};
</script>
<style lang="less">
#match {
  width: 100%;
  .news {
    width: 66%;
    padding: 20px 0;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    h4 {
      width: 100%;
      margin: 20px 0;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background-color: #efefef;
    }
    .U8_12 {
      width: 60%;
      .U_num {
        width: 100%;
        p {
          color: #a41f24;
          font-size: 22px;
        }
        li a {
          width: 100%;
          font-size: 18px;
          line-height: 40px;
          text-decoration: none;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
        }
        a:hover {
          color: #1c86ee;
        }
      }
    }
    .video_pic {
      width: 40%;
      background-color: #efefef;
      .com-pic {
        width: 100%;
        height: 300px;
        a {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
          h5 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
            font-weight: 400;
            text-align: center;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
      }
      .com-video {
        width: 100%;
        padding-top: 40px;
       .video-js .vjs-big-play-button{
           left: 50%;
           top: 50%;
           transform: translate(-50%,-50%)
       }
        // img {
        //   width: 100%;
        //   border: 1px solid #ccc;
        // }
      }
    }
  }
}
</style>


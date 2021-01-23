<template>
  <div id="video">
    <div class="pic">
      <img src="../assets/banner11.jpg" alt />
    </div>
    <div class="video_content">
      <p class="title">精彩视频</p>
      <ul class="content">
        <li v-for="item in videoData" :key="item.id">
          <a :href="item.url">
            <div class="imgStyle">
              <img :src="item.img" alt />
            </div>

            <p>{{item.name}}</p>
          </a>
        </li>
      </ul>
    </div>
    <footerPage></footerPage>
  </div>
</template>
<script>
import footerPage from "../components/footer";
export default {
  components: {
    footerPage
  },
  data() {
    return {
      videoData: [
        {
          id: 1,
          name: "优肯国际篮球俱乐部",
          url: "http://www.youcanyoudo.com/video.html",
          img: require("../assets/one.jpg")
        },
        {
          id: 2,
          name: "两会热议青少年体育发展",
          url:
            "https://so.youku.com/search_video/q_UCBA%E8%B6%85%E7%BA%A7%E8%81%94%E8%B5%9B?f=1&kb=020200000000000__UCBA%E8%B6%85%E7%BA%A7%E8%81%94%E8%B5%9B",
          img: require("../assets/12.jpg")
        },
        {
          id: 3,
          name: "2018优肯/赵强训练营，以牙还牙！",
          url:
            "https://v.qq.com/x/page/g0700yd8mhr.html?pcsharecode=vFpWlY5i&sf=uri",
          img: require("../assets/seven.jpg")
        },
        {
          id: 4,
          name: "优肯国际篮球俱乐部",
          url: "http://www.youcanyoudo.com/video.html",
          img: require("../assets/one.jpg")
        },
        {
          id: 5,
          name: "两会热议青少年体育发展",
          url:
            "https://so.youku.com/search_video/q_UCBA%E8%B6%85%E7%BA%A7%E8%81%94%E8%B5%9B?f=1&kb=020200000000000__UCBA%E8%B6%85%E7%BA%A7%E8%81%94%E8%B5%9B",
          img: require("../assets/12.jpg")
        },
        {
          id: 6,
          name: "2018优肯/赵强训练营，以牙还牙！",
          url:
            "https://v.qq.com/x/page/g0700yd8mhr.html?pcsharecode=vFpWlY5i&sf=uri",
          img: require("../assets/seven.jpg")
        },
        {
          id: 7,
          name: "优肯国际篮球俱乐部",
          url: "http://www.youcanyoudo.com/video.html",
          img: require("../assets/one.jpg")
        },
        {
          id: 8,
          name: "两会热议青少年体育发展",
          url:
            "https://so.youku.com/search_video/q_UCBA%E8%B6%85%E7%BA%A7%E8%81%94%E8%B5%9B?f=1&kb=020200000000000__UCBA%E8%B6%85%E7%BA%A7%E8%81%94%E8%B5%9B",
          img: require("../assets/12.jpg")
        },
        {
          id: 9,
          name: "2018优肯/赵强训练营，以牙还牙！",
          url:
            "https://v.qq.com/x/page/g0700yd8mhr.html?pcsharecode=vFpWlY5i&sf=uri",
          img: require("../assets/seven.jpg")
        },
        {
          id: 10,
          name: "优肯国际篮球俱乐部",
          url: "http://www.youcanyoudo.com/video.html",
          img: require("../assets/one.jpg")
        },
        {
          id: 11,
          name: "两会热议青少年体育发展",
          url:
            "https://so.youku.com/search_video/q_UCBA%E8%B6%85%E7%BA%A7%E8%81%94%E8%B5%9B?f=1&kb=020200000000000__UCBA%E8%B6%85%E7%BA%A7%E8%81%94%E8%B5%9B",
          img: require("../assets/12.jpg")
        },
        {
          id: 12,
          name: "2018优肯/赵强训练营，以牙还牙！",
          url:
            "https://v.qq.com/x/page/g0700yd8mhr.html?pcsharecode=vFpWlY5i&sf=uri",
          img: require("../assets/seven.jpg")
        }
      ]
    };
  }
};
</script>
<style lang="less">
#video {
  width: 100%;
  .pic {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .video_content {
    width: 66%;
    margin: auto;
    padding: 64px 0;
    p {
      width: 100%;
      text-align: center;
      font-size: 32px;
      padding: 5px 0;
    }
    .content {
      padding-top: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 30%;
        overflow: hidden;
        a {
          width: 100%;
          display: block;
          text-decoration: none;
          .imgStyle {
            width: 100%;
            position: relative;
            img {
              display: block;
              width: 100%;
            }
          }
          .imgStyle::after {
            transition: all 1s;
            //   transition-delay: 0.5s;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% -50%);
            transform: rotate(-90deg);
            z-index: 99;
            display: block;
            content: "";
            width: 0;
            height: 0;
            border-width: 0px;
            border-style: solid;
            border-color: rgba(255, 255, 255, 0.9) transparent transparent
              transparent;
          }
          .imgStyle::before {
            transition: all 1s;
            display: block;
            width: 100%;
            height: 0;
            content: "";
            position: absolute;
            background-color: rgba(0, 0, 0, 0.6);
          }
          .imgStyle:hover::before {
            height: 100%;
          }
          .imgStyle:hover::after {
            border-width: 15px;
          }
          p {
            height: 24px;
            font-size: 14px;
            color: #333333;
            margin: 16px 0;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            word-break: break-all;
          }
        }
      }
    }
  }
}
</style>



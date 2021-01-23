<template>
  <div id="about">
    <div class="pic">
      <img src="../assets/about.jpg" alt />
    </div>
    <div class="youken_about">
      <h4 class="title">关于优肯</h4>
      <div class="aboutText">
        <ul>
          <li v-for="item in aboutText" :key="item.id">
            <h4>{{item.title}}</h4>
            <p>{{item.content}}</p>
          </li>
        </ul>
      </div>
      <div class="aboutPic">
        <img src="../assets/about_tec2.jpg" alt />
      </div>
      <div class="pic2">
        <img src="../assets/boss.jpg" alt />
      </div>
    </div>
    <div class="layout">
      <div class="culture">
        <h3>企业文化</h3>
        <ul class="card">
          <li>
            <div class="icon">
              <img src="../assets/icon1.jpg" alt />
            </div>
            <div class="tit">优肯愿景</div>
            <div class="text">为一亿中国家庭注入运动基因和欢乐</div>
          </li>
          <li>
            <div class="icon">
              <img src="../assets/icon2.jpg" alt />
            </div>
            <div class="tit">优肯使命</div>
            <div class="text">培养身能、心能的阳光少年!成为受人尊重的体育俱乐部!</div>
          </li>
          <li>
            <div class="icon">
              <img src="../assets/icon3.jpg" alt />
            </div>
            <div class="tit">核心价值观</div>
            <div class="text">团队为赢！诚信用心！求内创新</div>
          </li>
          <li>
            <div class="icon">
              <img src="../assets/icon4.jpg" alt />
            </div>
            <div class="tit">优肯特点</div>
            <div class="text">外教篮球，中英结合</div>
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
  data() {
    return {
      aboutText: [
        {
          id: 1,
          title: "优肯故事",
          content:
            "优肯国际篮球俱乐部成立于2011年初，是一家将篮球和英语相结合的体育教育公司。以篮球为载体，通过外教教学、赛事活动和国际交流，培养4-16岁青少年的运动能力、英语沟通能力、团队合作精神、积极阳光的人生态度和自信心。"
        },
        {
          id: 2,
          title: "外教精英",
          content:
            "因为高度认同优肯使命和价值观，优肯汇聚了全球的专业青训教练，他们用初心、责任心、爱心帮助和参与中国青少年成长，他们传授的不止篮球、英语，更带给学员国际化视野和开放的国际篮球文化。"
        },
        {
          id: 3,
          title: "中教精英",
          content:
            "优肯中教团队由CBA、CUBA现役和退役球员，各省市体育院校篮球专业毕业生及老师组成，教练成员均具备国家一级、国家二级运动员水平，具备出色的篮球技术、众多比赛经验和多年的青少年培训教学经验。课堂上中外教结合，通过娴熟的教学方法来培养学生篮球兴趣爱好，扎实的篮球基础，并营造良好的英语口语氛围。"
        }
      ]
    };
  },
  components:{
    footerPage,
  }
};
</script>
<style lang="less">
#about {
  widows: 100%;
  .pic {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .youken_about {
    width: 66%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding-top: 64px;
    h4.title {
      width: 100%;
      text-align: center;
      font-size: 32px;
      font-weight: 400;
      line-height: 40px;
      margin-bottom: 64px;
    }
    .aboutText {
      flex: 1;
      padding-right: 80px;
      h4 {
        font-size: 24px;
        color: #268aff;
        margin-top: 35px;
        font-weight: normal;
      }
      p {
        padding: 24px 0;
        border-bottom: solid 1px #eeeeee;
        text-indent: 2em;
        font-size: 16px;
        line-height: 180%;
        text-align: justify;
        text-justify: inter-chartacter;
      }
    }
    .aboutPic {
      flex: 1;
      img {
        width: 100%;
      }
    }
    .pic2 {
      padding: 64px 0;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .layout {
    width: 100%;
    background: #f4f8fc;
    padding-bottom: 170px;
    .culture {
      width: 66%;
      margin: auto;
      h3 {
        font-size: 32px;
        padding: 50px 0;
        text-align: center;
        font-weight: normal;
      }
      .card {
        width: 100%;
        display: flex;
        justify-content: space-between;
        li {
          width: 270px;
          background: #fff;
          padding: 44px 32px 20px 32px;
          .icon {
            width: 100%;
            text-align: center;
            img {
              height: 100%;
            }
          }
          .tit {
            line-height: 22px;
            font-size: 18px;
            color: #333333;
            text-align: center;
            margin-top: 58px;
          }
          .text {
            height: 96px;
            line-height: 24px;
            font-size: 14px;
            margin-top: 34px;
          }
        }
      }
    }
  }
}
</style>



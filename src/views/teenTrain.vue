<template>
  <div id="teenTrain">
    <div class="header-pic">
      <a href="#">
        <img src="../assets/banner1.jpg" alt>
      </a>
    </div>
    <div class="content">
      <div class="content-mid">
        <h4 class="title">课程介绍</h4>
        <div class="item1">
          <img src="../assets/u6.jpg" alt>
          <div class="item-text">
            <h4>
              <span>U6</span> (4-6岁)
            </h4>
            <p>学员通过篮球游戏的启蒙教学，快速体会到篮球运动所带来独特快乐。</p>
          </div>
        </div>
        <div class="item1">
          <div class="item-text">
            <h4>
              <span>U8</span> (7-8岁)
            </h4>
            <p>教学最重视的团队篮球，良好的团队意识及个人沟通能力从此建立。</p>
          </div>
          <img src="../assets/u8.jpg" alt>
        </div>
        <div class="item1">
          <img src="../assets/u10.jpg" alt>
          <div class="item-text">
            <h4>
              <span>U10</span> (9-10岁)
            </h4>
            <p>学员开始感受篮球文化，基本功训练日渐加强。</p>
          </div>
        </div>
        <div class="item1">
          <div class="item-text">
            <h4>
              <span>U12</span> (11-12岁)
            </h4>
            <p>学员通过篮球游戏的启蒙教学，快速体会到篮球运动所带来独特快乐。</p>
          </div>
          <img src="../assets/u12.jpg" alt>
        </div>
        <div class="item1">
          <img src="../assets/u13.jpg" alt>
          <div class="item-text">
            <h4>
              <span>U13</span> (13岁以上)
            </h4>
            <p>带着对篮球运动的狂热之心，开启人生篮球梦。</p>
          </div>
        </div>
      </div>
      <div class="content-pic">
        <img src="../assets/group.jpg" alt>
        <img src="../assets/day.jpg" alt>
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
  }
};
</script>
<style lang="less">
#teenTrain {
  width: 100%;
  height: 100%;
  .header-pic {
    width: 100%;
    a {
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .content {
    width: 100%;
    .content-mid {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      padding-top: 64px;
      //   background-color: #ccc;
      .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-weight: normal;
        text-align: center;
        font-size: 32px;
        color: #333333;
      }
      .item1:hover {
        //   border: 1px solid #ccc;
        box-shadow: 2px 2px 14px #ccc;
      }
      .item1 {
        width: 100%;
        margin-top: 52px;
        padding: 20px 0 5px 27px;
        display: flex;
        img {
          flex: 1;
          border-radius: 20px 20px;
        }
        .item-text {
          width: 400px;
          padding: 20px 20px 0;
          transition: all 1s;
          h4 {
            font-size: 36px;
            line-height: 50px;
            font-weight: 700;
            color: #333;
            margin-bottom: 30px;
            span {
              border-bottom: 3px solid blue;
            }
          }
          p {
            font-size: 20px;
            line-height: 32px;
            color: #ccc;
          }
        }
      }
    }
    .content-pic {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      padding-top: 64px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
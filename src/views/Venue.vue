<template>
  <div id="Venue">
    <div class="banner">
      <img src="../assets/banner3.jpg" alt>
    </div>
    <div class="info">
      <ul>
        <li>
          <h4>方庄篮球基地</h4>
          <p>地址：丰台区方庄体育公园北门优肯篮球基地联系电话：010-56259056</p>
          <div
            class="describe"
          >场馆介绍：方庄基地是优肯篮球第一个属于自己的青训中心，馆内有三块标准的篮球场地，方庄基地采用专业枫木地板，免费无线网，可同时容纳1000人，平时开设外教常规班，体能特训班，战狼特训队，假期开设战狼训练营、全日营、教练营等。这里是中国小篮球联赛和北京篮协俱乐部杯的承办场地，同时也是UCBA东部赛区的举办地，NBA著名球星奥多姆的见面会也在此举行。</div>
          <div class="pic">
            <img src="../assets/wl1.jpg" alt>
            <img src="../assets/wl2.jpg" alt>
          </div>
        </li>
        <li>
          <h4>方庄篮球基地</h4>
          <p>地址：丰台区方庄体育公园北门优肯篮球基地联系电话：010-56259056</p>
          <div
            class="describe"
          >场馆介绍：方庄基地是优肯篮球第一个属于自己的青训中心，馆内有三块标准的篮球场地，方庄基地采用专业枫木地板，免费无线网，可同时容纳1000人，平时开设外教常规班，体能特训班，战狼特训队，假期开设战狼训练营、全日营、教练营等。这里是中国小篮球联赛和北京篮协俱乐部杯的承办场地，同时也是UCBA东部赛区的举办地，NBA著名球星奥多姆的见面会也在此举行。</div>
          <div class="pic">
            <img src="../assets/wl1.jpg" alt>
            <img src="../assets/wl2.jpg" alt>
          </div>
        </li>
        <li>
          <h4>方庄篮球基地</h4>
          <p>地址：丰台区方庄体育公园北门优肯篮球基地联系电话：010-56259056</p>
          <div
            class="describe"
          >场馆介绍：方庄基地是优肯篮球第一个属于自己的青训中心，馆内有三块标准的篮球场地，方庄基地采用专业枫木地板，免费无线网，可同时容纳1000人，平时开设外教常规班，体能特训班，战狼特训队，假期开设战狼训练营、全日营、教练营等。这里是中国小篮球联赛和北京篮协俱乐部杯的承办场地，同时也是UCBA东部赛区的举办地，NBA著名球星奥多姆的见面会也在此举行。</div>
          <div class="pic">
            <img src="../assets/wl1.jpg" alt>
            <img src="../assets/wl2.jpg" alt>
          </div>
        </li>
        <li>
          <h4>方庄篮球基地</h4>
          <p>地址：丰台区方庄体育公园北门优肯篮球基地联系电话：010-56259056</p>
          <div
            class="describe"
          >场馆介绍：方庄基地是优肯篮球第一个属于自己的青训中心，馆内有三块标准的篮球场地，方庄基地采用专业枫木地板，免费无线网，可同时容纳1000人，平时开设外教常规班，体能特训班，战狼特训队，假期开设战狼训练营、全日营、教练营等。这里是中国小篮球联赛和北京篮协俱乐部杯的承办场地，同时也是UCBA东部赛区的举办地，NBA著名球星奥多姆的见面会也在此举行。</div>
          <div class="pic">
            <img src="../assets/wl1.jpg" alt>
            <img src="../assets/wl2.jpg" alt>
          </div>
        </li>
      </ul>
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
#Venue {
  width: 100%;
  .banner{
      width: 100%;
      img{
          width: 100%;
      }
  }
  .info {
    width: 66%;
    padding-top: 20px;
    margin: auto;
    ul {
        width: 100%;
      li {
        h4 {
          font-size: 22px;
          color: #2a62ff;
          line-height: 24px;
        }
        p {
          font-size: 14px;
          padding: 8px 0;
          color: #a3a5b3;
        }
        .describe {
          font-size: 14px;
          color: #666;
          line-height: 24px;
          word-break: break-all;
        }
        .pic {
          width: 100%;
          padding: 10px 0;
          display: flex;
          justify-content: space-between;
          img {
            width: 48%;
          }
        }
      }
    }
  }
}
</style>




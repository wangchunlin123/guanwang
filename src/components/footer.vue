<template>
  <div id="footer">
    <div class="content">
      <div class="content-top">
        <div class="content-top-left">
          <dl>
            <dt>北京优肯阳光网络教育科技有限公司</dt>
            <dd>
              <a href="#">青少年篮球培训</a>
            </dd>
            <dd>
              <a href="#">场馆租赁</a>
            </dd>
            <dd>
              <a href="#">精彩视频</a>
            </dd>
            <dd>
              <a href="#">UCBA超级联赛</a>
            </dd>
            <dd>
              <a href="#">关于我们</a>
            </dd>
          </dl>
        </div>
        <div class="content-top-mid">
          <dl>
            <dt>联系我们</dt>
            <dd>
              <i class="el-icon-phone-outline"></i>
              <a href="#">400-6817400</a>
            </dd>
            <dd>
              <i class="el-icon-message"></i>
              <a href="#">service@youcanyoudo.com</a>
            </dd>
            <dd>
              <i class="el-icon-location-information"></i>
              <a href="#">北京市·海淀区中关村E世界A座7层</a>
            </dd>
          </dl>
        </div>
        <div class="content-top-right">
          <dl>
            <dt>更多精彩请关注</dt>
            <dd>
              <img src="../assets/wx.jpg" alt>
            </dd>
            <dd>
              <img src="../assets/xcx.jpg" alt>
            </dd>
          </dl>
        </div>
      </div>
      <div class="content-bottom">
        &copy; 2011-2019 &copy; 优肯教育
        <a href="#">京ICP备12015891号-1</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#footer {
  width: 100%;
  background: #142347;
  padding-top: 78px;
  .content {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    .content-top {
      width: 100%;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #a3a5b3;
      .content-top-left,
      .content-top-mid,
      .content-top-right {
        width: 30%;
        dl {
          margin-bottom: 20px;
        }
        dl > dt {
          font-size: 18px;
          color: #ffffff;
          margin-bottom: 12px;
        }
        dl > dd {
          height: 38px;
          line-height: 38px;
          // overflow: hidden;
          a {
            text-decoration: none;
            font-size: 14px;
            color: #a3a5b3;
          }
        }
        [class^="el-icon-"] {
          color: #a3a5b3;
          font-size: 14px;
          margin-right: 8px;
        }
      }
      .content-top-right {
        dl {
          overflow: hidden;
        }
        dd {
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
    .content-bottom {
      font-size: 12px;
      color: #a3a5b3;
      line-height: 20px;
      text-align: center;
      padding: 34px 0 48px 0;
      a {
        text-decoration: none;
        color: #a3a5b3;
      }
    }
  }
}
</style>
import Vue from 'vue'
import Router from 'vue-router'
// element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// swiper轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 视频播放组件
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'


import home from "./views/home.vue"
import teenTrain from "./views/teenTrain.vue"
import venue from "./views/Venue.vue"
import study from "./views/study.vue"
import match from "./views/match.vue"
import brand from "./views/brand.vue"
import about from './views/about.vue'
import video from './views/video.vue'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:"/",redirect:"home"},
    {path:"/home", component:home},
    {path:"/teenTrain", component:teenTrain},
    {path:'/venue',component:venue},
    {path:'/study',component:study},
    {path:'/match',component:match},
    {path:'/brand',component:brand},
    {path:'/about',component:about},
    {path:'/video',component:video}
  ]
})

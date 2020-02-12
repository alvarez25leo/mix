/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')

window.EventBus = new Vue()

import './directives/main'
import {store} from './vuex/store'
import mixglobal from './mixins/global'
import { VLazyImagePlugin } from "v-lazy-image"
import VueLazyload from 'vue-lazyload'
import vueVimeoPlayer from 'vue-vimeo-player'
import VueChatScroll from 'vue-chat-scroll'


Vue.use(VLazyImagePlugin)
Vue.use(VueLazyload)
Vue.use(vueVimeoPlayer)
Vue.use(VueChatScroll)

import './components'

Vue.mixin(mixglobal)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
    computed:{
        loadedLine(){
            return this.$store.state.loadpage
        }
    }
})

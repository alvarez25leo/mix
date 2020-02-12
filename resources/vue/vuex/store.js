import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex);

import user from './modules/user'


const appUrl = process.env.MIX_APP_URL

export const store = new Vuex.Store({
    state: {
        name: process.env.MIX_APP_NAME,
        isAuthenticaded: !! window.APP.config.signing,
        asset: appUrl,
        path: appUrl,
        storageUrl: `${appUrl}/storage/`,
        imgUrl: `${appUrl}/images/`,
        staticUrl: `${appUrl}/static/`,
        apiwebUrl: `${appUrl}/webapi/v1/`,
        apiUrl: `${appUrl}/api/v1/`,
        s3Url: null,
        avatarDefault:`${appUrl}/static/${window.APP.config.avatar}`,
        cloudinaryUrl: null,
        csrfToken: window.APP.config.csrf,
        placeholderimg:'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        themeDark:false,
        loadpage:false
    },
    mutations:{
        progressNavbar: (state, payload)=> {
            state.loadpage = payload
        }
    },
    modules: {
        user,
    }
})

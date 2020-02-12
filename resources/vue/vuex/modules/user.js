import Vue from 'vue';

const state = {
    status: (window.APP.config.session) ? true : false,
    user: (window.APP.config.session) ? window.APP.config.session : {}
}

const getters = {

}

const actions = {}

const mutations = {
    changePicture: (state, image) => {
        state.user.picture = image
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

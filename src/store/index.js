import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  userInfo: {
    nick: null,
    uid: null,
  },
};

/* eslint-disable*/
const mutations = {
  updateUserInfo(state, newUserInfo) {
    state.userInfo = newUserInfo;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});

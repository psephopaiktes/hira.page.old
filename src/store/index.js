import { createStore } from "vuex";

export default createStore({
  state: {
    blogIndex: [],
    blogIndexLoaded: false,
    worksIndex: [],
    worksIndexLoaded: false,
    worksModal: ""
  },
  mutations: {
    setBlogIndex(state, array) {
      state.blogIndex = array;
    },
    setBlogIndexLoaded(state) {
      state.blogIndexLoaded = true;
    },
    setWorksIndex(state, array) {
      state.worksIndex = array;
    },
    setWorksIndexLoaded(state) {
      state.worksIndexLoaded = true;
    },
    setWorksModal(state, url) {
      state.worksModal = url;
    }
  },
  actions: {},
  modules: {}
});

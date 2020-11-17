import { createStore } from "vuex";

export default createStore({
  state: {
    blogIndex: [],
    blogIndexLoaded: false,
    worksIndex: [],
    worksIndexLoaded: false
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
    }
  },
  actions: {},
  modules: {}
});

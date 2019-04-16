import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sidebar: {
            isOpen: false,
            classes: {
                isToggled: 'toggled',
            },
        },
    },
    getters: {
        sideBarOpen (state) {
            return state.sidebar.isOpen;
        },
    },
    mutations: {
      toggleSideBar (state) {
            state.sidebar.isOpen = !state.sidebar.isOpen;
        },
    },
    actions: {}
});
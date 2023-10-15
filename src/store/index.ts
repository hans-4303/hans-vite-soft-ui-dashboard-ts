import { createStore } from "vuex";
import { State } from "../types/data/storeState.type";

export default createStore<State>({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isTransparent: "",
    isRTL: false,
    mcolor: "",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
  },
  mutations: {
    toggleConfigurator(state: State) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state: State) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      const sidenav = document.getElementById("sidenav-main");

      if (sidenav_show?.classList.contains("g-sidenav-pinned")) {
        sidenav_show.classList.remove("g-sidenav-pinned");
        setTimeout(function () {
          sidenav?.classList.remove("bg-white");
        }, 100);
        sidenav?.classList.remove("bg-transparent");
        state.isPinned = true;
      } else {
        sidenav_show?.classList.add("g-sidenav-pinned");
        sidenav?.classList.add("bg-white");
        sidenav?.classList.remove("bg-transparent");
        state.isPinned = false;
      }
    },
    sidebarType(state: State, payload: string) {
      state.isTransparent = payload;
    },
    navbarFixed(state: State) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
  },
  actions: {
    toggleSidebarColor({ commit }: { commit: any }, payload: string) {
      commit("sidebarType", payload);
    },
  },
  getters: {},
});

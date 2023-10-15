import { Commit } from "vuex/types/index.d.ts";

export type State = {
  [key: string]: string | number | boolean | null | undefined;
};

export type Mutations = {
  toggleConfigurator: (state: State) => void;
  navbarMinimize: (state: State) => void;
  sidebarType: (state: State, payload: string) => void;
  navbarFixed: (state: State) => void;
};

export type Actions = {
  toggleSidebarColor: ({ commit }: { commit: Commit }, payload: string) => void;
};

export type Getters = {};

<template></template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import store from "./store/index";

export default defineComponent({
  name: "App",
  computed: {
    navClasses() {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky":
          store.state.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2": store.state.isAbsolute,
        "px-0 mx-4 mt-4": !store.state.isAbsolute,
      };
    },
  },
  beforeMount() {
    store.state.isTransparent = "bg-transparent";
  },
  method: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
});
</script>

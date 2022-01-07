<template>
  <div class="hidden" id="btn">
    <div
      class="bg-white flex bg-opacity-50 hover:bg-cyan shadow-lg rounded-full"
    >
      <router-link
        to="/"
        class="p-1 md:p-3 text-dark-violet hover:text-white"
        v-scroll-to="'#header'"
        ><div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="md:w-7 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg></div
      ></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "scrollToTop",
  setup() {
    // const btn: any = document.getElementById("btn");
    window.onscroll = () => {
      const btn: any = document.getElementById("btn: string");
      if (document.documentElement.scrollTop > 100) {
        btn.classList.remove("hidden");
      } else {
        btn.classList.add("hidden");
      }
    };
    return {};
  },
});
</script>

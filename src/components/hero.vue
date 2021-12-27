<template>
  <div class="grid lg:flex pb-10 lg:mt-5 mt-2 lg:-mb-10">
    <div
      class="flex transform scale-175 xs:scale-125 dl:scale-105 dl:pl-0 pl-24 xs:my-5 mx-auto my-16 lg:my-2 lg:order-1"
    >
      <img src="../assets/illustration-working.svg" alt="" />
    </div>
    <div
      class="grid lg:w-3/5 lg:pl-40 px-5 lg:text-left justify-items-center lg:justify-items-start"
    >
      <div
        class="xl:text-5xl text-4xl font-black text-very-dark-violet mt-10 lg:mt-28 mb-3 lg:mb-0 px-10 lg:px-0"
      >
        <p class="leading-tight">More than just <span> shorter links</span></p>
      </div>
      <div
        class="lg:pb-2 pb-5 lg:px-0 px-5 font-semibold lg:text-xl text-grayish-violet"
      >
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </div>
      <buttons name="full">Get Started</buttons>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import buttons from "../components/button.vue";

export default defineComponent({
  name: "hero",
  components: {
    buttons,
  },
});
</script>

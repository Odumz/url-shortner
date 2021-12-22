<template>
  <div class="grid lg:flex pb-20">
    <div class="flex transform scale-175 pl-24 my-16 lg:order-1">
      <img src="../assets/illustration-working.svg" alt="" />
    </div>
    <div
      class="grid lg:w-2/5 px-5 lg:px-20 justify-items-center lg:justify-items-start"
    >
      <div
        class="lg:text-5xl text-3xl font-bold text-very-dark-violet mt-10 mb-3 px-10"
      >
        More than just shorter links
      </div>
      <div class="pb-5 font-semibold text-grayish-violet">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </div>
      <buttons>Get Started</buttons>
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

<template>
  <div
    class="relative bg-white grid lg:justify-items-start justify-items-center rounded px-5 py-5"
  >
    <slot name="icon"></slot>
    <div class="body lg:text-left text-center pt-10">
      <h1 class="text-xl font-semibold py-3"><slot name="title"></slot></h1>
      <p class="text-lg text-grayish-violet">
        <slot name="text-description"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "stats-card",
});
</script>

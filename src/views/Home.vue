<template>
  <div class="home pt-3">
    <main-header />
    <main-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mainHeader from "@/components/header.vue";
import mainFooter from "@/components/footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    mainHeader,
    mainFooter,
  },
});
</script>

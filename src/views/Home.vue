<template>
  <div class="home pt-3 overflow-hidden">
    <main-header />
    <shorten-form />
    <stats />
    <cta />
    <main-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mainHeader from "@/components/header.vue";
import mainFooter from "@/components/footer.vue";
import shortenForm from "@/components/form.vue";
import stats from "@/components/stats.vue";
import cta from "@/components/cta.vue";

export default defineComponent({
  name: "Home",
  components: {
    mainHeader,
    mainFooter,
    shortenForm,
    stats,
    cta,
  },
});
</script>

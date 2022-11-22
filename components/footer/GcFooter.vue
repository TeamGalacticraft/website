<template>
  <v-footer class="gc-footer w-100 py-4">
    <p class="text-12 text-center w-100">
      &copy; 2022 Galacticraft. All rights reserved.
    </p>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "GcFooter",
  setup() {
    onMounted(() => {
      gsap.to(".gc-footer", {
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom-=70px",
        },
        y: 0,
        opacity: 1,
        duration: 0.5,
      });
    });
  },
});
</script>

<style lang="scss" scoped>
.gc-footer {
  background: rgb(2, 10, 15);
  opacity: 0;
  transform: translateY(30px);
}
</style>

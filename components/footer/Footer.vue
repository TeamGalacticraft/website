<template>
  <div class="footer mt-6 py-4 text-center">
    <p class="text-12">&copy; 2022 Galacticraft. All rights reserved.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  name: "Footer",
  setup() {
    onMounted(() => {
      gsap.to(".footer", {
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom-=70px",
        },
        y: 0,
        opacity: 1,
        duration: 1,
      });
    });
  },
});
</script>

<style lang="scss" scoped>
.footer {
  background: rgb(2, 10, 15);
  opacity: 0;
  transform: translateY(50px);
}
</style>

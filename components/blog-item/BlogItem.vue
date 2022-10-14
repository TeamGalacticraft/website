<template>
  <div class="blog">
    <div class="blog-container">
      <div>
        <div class="blog-title-container w-100">
          <div class="blog-title">
            <h3 class="m-0 text-24 text-ellipsis">{{ blog.title }}</h3>
            <p class="m-0 text-primary text-12">{{ formatDate(blog.date) }}</p>
          </div>

          <img v-if="isMobile" src="../../assets/rocket.png" alt="" />
        </div>

        <p
          class="text-12 text-multiline-ellipsis"
          :class="isMobile ? 'mt-2' : 'mt-5'"
        >
          {{ blog.desc }}
        </p>
      </div>

      <img v-if="!isMobile" src="../../assets/rocket.png" alt="" />
    </div>

    <hr v-if="!lastItem" class="w-100 bg-secondary" style="opacity: 0.2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { BlogItem } from "./types/blogItem.types";
import { isMobile } from "@/composables/mediaQueries";
import { formatDate } from "@/composables/time";

export default defineComponent({
  name: "BlogItem",
  props: {
    blog: {
      type: Object as PropType<BlogItem>,
      default: () => ({}),
    },
    lastItem: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const blogImage = computed<string>(
      () => new URL(`../../assets/${props.blog.image}`, import.meta.url).href
    );

    return {
      isMobile,
      blogImage,
      formatDate,
    };
  },
});
</script>

<style lang="scss" scoped>
.blog {
  &-container {
    padding: 30px 20px;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  }

  .blog-title-container {
    display: flex;
    align-items: center;
  }

  &-item {
    &:nth-child(even) {
      .blog-title-container {
        justify-content: space-between;
      }
    }

    &:nth-child(odd) {
      .blog-title {
        margin-left: 20px;
      }

      img {
        order: -1 !important;
      }
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  img {
    width: 80px;
    border-radius: 10px;
    border: 1px solid $primary;
    align-self: flex-start;
  }

  @media (min-width: 768px) {
    &-container {
      display: grid;
      grid-gap: 40px;
      align-items: center;
      padding: 50px 20px;
    }

    &-item {
      &:nth-child(odd) {
        .blog-container {
          grid-template-columns: 150px 1fr;
        }
      }

      &:nth-child(even) {
        .blog-container {
          grid-template-columns: 1fr 150px;
        }
      }
    }

    &-title {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }

    img {
      width: 100%;
    }
  }
}
</style>

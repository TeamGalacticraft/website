<template>
  <div v-if="post" class="blog-post xf-text-colour-white xf-py-15 xf-px-6">
    <img
      class="xf-w-100 xf-mb-4"
      :src="urlFor(post.mainImage.asset._ref).url()"
      alt=""
    />

    <div class="xf-mb-4">
      <h1>{{ post.title }}</h1>
      <p class="xf-text-10 xf-mt-1 xf-text-colour-secondary">
        {{ formatDate(post.publishedAt) }}
      </p>
    </div>

    <sanity-blocks :blocks="post.body" :serializers="serializers" />
  </div>
</template>

<script lang="ts" setup>
import { SanityBlocks } from "sanity-blocks-vue-component";
import { createClient } from "@sanity/client";
import { Serializers } from "sanity-blocks-vue-component/dist/types";
import imageUrlBuilder from "@sanity/image-url";

import GcCarousel from "~/components/Carousel/GcCarousel.vue";

// ** Data **
const route = useRoute();

const post = ref<any>();

// ** Sanity **
const client = createClient({
  projectId: "yiv23jd7",
  dataset: "production",
  apiVersion: "2023-06-10",
});
const builder = imageUrlBuilder(client);
const serializers: Partial<Serializers> = {
  types: {
    lineBreak: h("hr", { class: "line-break" }),
    youtube: (props) => h("iframe", { src: props.url }),
    gallery: (props) => h(GcCarousel, { images: props.images, builder }),
  },
};

// ** Methods **
const urlFor = (source: any): any => {
  return builder.image(source);
};

const getMatchingBlog = async () => {
  const { slug = "" } = route.params;

  post.value = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  console.log(post.value);
};

const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

getMatchingBlog();
</script>

<style lang="scss">
.blog-post {
  background-color: black;
  background-image: url("/icons/star-bg.svg");
  background-size: contain;
  background-position: center;

  img {
    border: 1px solid #00a8ff;
    border-radius: 5px;
  }

  p {
    min-height: 20px !important;
    color: #b3c5ef;
  }

  iframe {
    width: 100%;
    height: 250px;
  }

  hr {
    border: 0;
    background: rgb(59, 59, 59);
    height: 2px;
    margin: 30px 10px;
  }

  a {
    color: #00a8ff;
  }
}
</style>

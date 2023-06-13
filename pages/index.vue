<template>
  <!-- Header -->
  <div class="header">
    <fuzzy-image
      img="/img/header-bg.png"
      min-img="/img/header-bg-min.png"
      background
    />

    <div class="xf-center">
      <div class="xf-text-center xf-mb-2 xf-mb-sm-4">
        <img src="/img/galactic-graphic.png" alt="" />
      </div>

      <div class="header-downloads xf-flex-center xf-bg-black xf-py-2">
        <xf-icon class="xf-mr-1" fill="orange" src="icons/flame.svg" />

        <span id="counting-number" class="xf-fw-700 xf-text-12 xf-text-14-sm">
          15527478
        </span>
        <span
          class="xf-ml-1 xf-text-colour-grey xf-text-8 xf-text-10-sm xf-text-14-md"
        >
          DOWNLOADS
        </span>
      </div>
    </div>
  </div>

  <!-- Blogs -->
  <div class="blogs xf-grid xf-pt-8 xf-mb-15">
    <div
      v-for="(blog, i) in data"
      :key="i"
      class="blogs-item xf-text-colour-white xf-hover xf-cursor-pointer xf-p-4 xf-mb-8 xf-grid xf-col-12"
      :class="i === 0 ? 'blogs-item-first' : 'xf-col-lg-6 xf-col-xl-4'"
      @click="viewBlog(blog.slug.current)"
    >
      <SanityImage
        class="xf-w-100 xf-col-12"
        :class="i === 0 ? 'xf-col-lg-6' : ''"
        :asset-id="blog.mainImage.asset._ref"
        auto="format"
      />

      <div
        class="xf-mt-sm-2 xf-mt-lg-4 xf-col-12"
        :class="i === 0 ? 'xf-col-lg-5 xf-ml-4' : ''"
      >
        <!-- <p class="xf-text-10 xf-text-colour-secondary">{{ blog.tag }}</p> -->
        <h2 :class="i === 0 ? 'xf-fw-700 xf-text-32-lg' : ''">
          {{ blog.title }}
        </h2>
        <p
          class="xf-text-12 xf-text-14-sm xf-text-16-lg xf-mt-2 xf-text-ellipsis-3"
        >
          {{ blog.description }}
        </p>

        <div
          class="xf-text-10 xf-text-12-sm xf-text-14-lg xf-mt-4 xf-mt-lg-6 xf-text-colour-secondary"
        >
          <span>{{ formatDate(blog.publishedAt) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";

// ** Data **
const router = useRouter();

const { data } = await useSanityQuery('*[_type == "post"]');

// ** Methods **
const startCountdown = () => {
  const countingElement: HTMLElement | null =
    document.getElementById("counting-number");
  const startNumber: number = 15500000;
  const endNumber: number = 15527478;
  const duration: number = 2000;

  let currentNumber: number = startNumber;
  let startTime: number | null = null;

  const easeOutQuad = (t: number): number => t * (2 - t);

  const animate = (timestamp: number): void => {
    if (!startTime) {
      startTime = timestamp;
    }

    const progress: number = timestamp - startTime;
    const percentage: number = Math.min(progress / duration, 1);
    const easedPercentage: number = easeOutQuad(percentage);

    currentNumber = Math.floor(
      easedPercentage * (endNumber - startNumber) + startNumber
    );

    if (countingElement) {
      countingElement.textContent = currentNumber.toLocaleString();
    }

    if (progress < duration) {
      // Schedule the next frame
      requestAnimationFrame(animate);
    }
  };

  const initLoad: string | null = sessionStorage.getItem("initLoad");

  if (initLoad && countingElement) {
    countingElement.textContent = endNumber.toLocaleString();
  } else {
    requestAnimationFrame(animate);

    sessionStorage.setItem("initLoad", "true");
  }
};

onMounted(startCountdown);

const viewBlog = (id: string): void => {
  router.push(`/blog/${id}`);
};
</script>

<style lang="scss" scoped>
.header {
  height: 400px;
  width: 100%;
  position: relative;

  img {
    width: 360px;
  }

  &-downloads {
    border-radius: 10px;
    text-align: center;
    color: white;
    max-width: 220px;
    margin: 0 auto;
    border: 1px solid map-get($gc-colours, "tertiary");

    #counting-number {
      animation: counting 2s linear;

      @include md-up {
        font-size: 16px;
      }
    }
  }

  @include sm-up {
    height: 500px;

    img {
      width: 550px;
    }

    &-downloads {
      max-width: 260px;
    }
  }

  @include md-up {
    height: 600px;

    img {
      width: 600px;
    }
  }

  @include md-up {
    height: 700px;

    img {
      width: 700px;
    }

    &-downloads {
      max-width: 320px;
    }
  }
}

.blogs {
  max-width: 350px;
  margin: 0 auto;

  @include sm-up {
    max-width: 500px;
  }

  @include md-up {
    width: 90%;
    max-width: 1400px;
  }

  @include lg-up {
    margin-top: 50px;
  }

  &-item {
    align-items: center;

    @include md-up {
      &-first {
        img {
          height: 350px;
          aspect-ratio: 16 / 9;
          object-fit: cover;
        }
      }
    }

    @include lg-up {
      &-first {
        img {
          height: 400px;
        }
      }
    }

    img {
      border: 1px solid map-get($gc-colours, "tertiary");
      border-radius: 5px;
    }
  }
}

@keyframes counting {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

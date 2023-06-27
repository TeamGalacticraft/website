<template>
  <!-- Header -->
  <div class="header">
    <fuzzy-image
      img="/img/header-2.png"
      min-img="/img/header-2-min.png"
      linear-gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.60) 75%, #000 100%)"
      background
    />

    <div class="xf-center">
      <div class="xf-text-center xf-mb-2">
        <img src="/img/galactic-graphic.png" alt="" />
      </div>

      <div class="xf-flex-center xf-col-gap-1">
        <div
          class="header-downloads xf-cursor-pointer xf-hover xf-flex-center xf-bg-black xf-py-2"
          @click="
            goToDownloadPage(
              'https://www.curseforge.com/minecraft/mc-mods/galacticraft-legacy'
            )
          "
        >
          <xf-icon
            class="xf-mr-2"
            src="icons/curseforge.svg"
            :size="isMedium ? 24 : 18"
          />

          <span id="curse-downloads" class="xf-fw-700 xf-text-12">
            {{ curseDownloads.toLocaleString() }}
          </span>
        </div>

        <div
          class="header-downloads xf-cursor-pointer xf-hover xf-flex-center xf-bg-black xf-py-2"
          @click="
            goToDownloadPage('https://modrinth.com/mod/galacticraft-legacy')
          "
        >
          <xf-icon
            class="xf-mr-2"
            src="icons/modrinth.svg"
            :size="isMedium ? 24 : 18"
          />

          <span id="modrinth-downloads" class="xf-fw-700 xf-text-12">
            {{ modrinthDownloads.toLocaleString() }}
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Blogs -->
  <div class="blogs xf-grid xf-pt-15 xf-mb-15">
    <div
      v-for="(blog, i) in content"
      :key="i"
      class="blogs-item xf-text-colour-white xf-hover xf-cursor-pointer xf-p-4 xf-mb-8 xf-grid xf-col-12"
      :class="i === 0 ? 'blogs-item-first' : 'xf-col-lg-6 xf-col-xl-4'"
      @click="viewBlog(blog.slug.current)"
    >
      <SanityImage
        class="xf-w-100 xf-col-12"
        :class="{ 'xf-col-lg-6': i === 0 }"
        :asset-id="blog.mainImage.asset._ref"
        auto="format"
      />

      <div
        class="xf-mt-sm-2 xf-mt-lg-4 xf-col-12"
        :class="{ 'xf-col-lg-5 xf-ml-4': i === 0 }"
      >
        <h2 :class="{ 'xf-fw-700 xf-text-32-lg': i === 0 }">
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

const modrinthDownloads = ref<number>(0);
const curseDownloads = ref<number>(0);

const { data } = await useSanityQuery('*[_type == "post"]');

// ** Computed **
const content = computed(() =>
  data.value.sort(
    (a: any, b: any) => new Date(b.publishedAt) - new Date(a.publishedAt)
  )
);

// ** Methods **
await useFetch("/api/modrinth").then(
  (res) => (modrinthDownloads.value = res.data.value?.downloads || 0)
);

await useFetch("/api/curseforge").then((res) => {
  curseDownloads.value = res.data.value?.data.downloadCount || 0;
});

const startCountdown = (startValue: number, endValue: number, id: string) => {
  const countingElement: HTMLElement | null = document.getElementById(id);
  const duration: number = 2000;

  let currentNumber: number = startValue;
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
      easedPercentage * (endValue - startValue) + startValue
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
    countingElement.textContent = endValue.toLocaleString();
  } else {
    requestAnimationFrame(animate);
  }
};

const viewBlog = (id: string): void => {
  router.push(`/blog/${id}`);
};

const goToDownloadPage = (route: string): void => {
  window.open(route);
};

// ** Lifecycle **
onMounted(() => {
  startCountdown(
    modrinthDownloads.value / 2,
    modrinthDownloads.value,
    "modrinth-downloads"
  );
  startCountdown(
    curseDownloads.value / 2,
    curseDownloads.value,
    "curse-downloads"
  );

  sessionStorage.setItem("initLoad", "true");
});
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
    width: 120px;
    border: 1px solid #272727;

    @include sm-up {
      width: 180px;
    }

    #modrinth-downloads,
    #curse-downloads {
      animation: counting 2s linear;

      @include sm-up {
        font-size: 16px !important;
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
          object-fit: contain;
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

<!-- eslint-disable vue/require-default-prop -->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DevItem",
  props: {
    devId: String,
    name: String,
    username: String,
    img: String,
    link: String,
  },
});
</script>

<template>
  <article>
    <div :key="devId" class="dev">
      <figure class="image">
        <img :src="img" :alt="name" class="img-fluid" />
        <div class="text-area text-[#502c3b] font-roboto">
          <p class="name text-3xl">{{ name }}</p>
          <p>
            <a :href="link" class="username">@{{ username }}</a>
          </p>
        </div>
      </figure>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  .dev {
    figure {
      display: flex;
      // justify-content: center;
      flex-direction: column;
      // padding: 6rem;
      height: 10rem;
      width: 10rem;

      img {
        border-radius: 50%;
        height: 10rem;
        width: 10rem;
      }
      .text-area {
        margin: 2rem;
        text-align: center;
      }
    }
  }
}
</style>

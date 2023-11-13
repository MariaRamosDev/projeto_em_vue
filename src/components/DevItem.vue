<!-- eslint-disable vue/require-default-prop -->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DevItem",
  props: {
    id: String,
    name: String,
    username: String,
    img: String,
    link: String,
  },
});
</script>

<template>
  <article>
    <div :key="id" class="dev">
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
  height: 20rem;
  width: 13rem;
  .dev {
    figure {
      display: flex;
      flex-direction: column;
      height: inherit;
      width: inherit;

      img {
        border-radius: 50%;
        height: 13rem;
        width: 13rem;
      }
      .text-area {
        margin-top: 2rem;
        align-self: center;
        width: 9rem;

        p.name,
        p.username {
          text-align: center;
        }
      }
    }
  }
}
</style>

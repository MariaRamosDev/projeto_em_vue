<!-- eslint-disable vue/require-default-prop -->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoomItem",
  props: {
    id: String,
    title: String,
    description: String,
    price: String,
    img: String,
  },
});
</script>

<template>
  <article :key="id">
    <div class="room">
      <figure
        class="image"
        :style="{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center center',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div class="text-area tw-text-text tw-font-roboto">
          <p class="title tw-text-3xl">{{ title }}</p>
          <div class="description">
            <p class="tw-text-md">{{ description }}</p>
          </div>
          <p style="margin-top: 1.5rem">{{ price }}</p>
        </div>
      </figure>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  margin-bottom: 2rem;
  .room {
    display: flex;
    flex-direction: column;

    figure {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .text-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
        text-shadow: 0px 0px 5px rgba(151, 109, 126, 0.575);
        padding: 0 30px;
        height: 25rem;
        width: 45rem;

        .title,
        .description {
          width: 100%;
        }
      }
    }
  }
}
</style>

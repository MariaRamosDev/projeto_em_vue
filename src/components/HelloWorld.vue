<template>
  <main>
    <div class="catalog grid gap-5 grid-cols-2 grid-rows-2 justify-center">
      <div class="room room101">
        <div class="image"></div>
        <p>Quarto 101</p>
      </div>
      <div class="room room102">
        <div class="image"></div>
        <p>Quarto 102</p>
      </div>
      <div class="room room103">
        <div class="image"></div>
        <p>Quarto 103</p>
      </div>
      <div class="room room104">
        <div class="image"></div>
        <p>Quarto 104</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.catalog {
  grid: auto / auto auto;

  .image {
    background-color: #2e2e2e;
    border-radius: 8px 8px 0 0;
    width: 249px;
    height: 249px;
  }

  .room {
    border: solid 1px #000;
    border-radius: 10px;
    height: 350px;
    width: 250px;

    p {
      text-align: left;
      padding: 10px;
    }
  }
}
</style>

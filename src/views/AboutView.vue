<script lang="ts">
import { defineComponent } from "vue";
import DevItem from "@/components/DevItem.vue";
import axios from "axios";

export default defineComponent({
  name: "AboutView",
  components: {
    DevItem,
  },
  data() {
    return {
      devs: [],
    };
  },
  async beforeMount() {
    this.devs = await axios
      .get("http://localhost:3000/devs")
      .then((response) => response.data)
      .catch((error) => console.log(`Algo deu erardo: ${error}`));
  },
});
</script>

<template>
  <div class="about">
    <section>
      <DevItem
        v-for="dev in devs"
        :key="dev.id"
        :name="dev.name"
        :username="dev.username"
        :img="dev.img"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about {
  height: 100%;
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 25rem;
  }
}
</style>

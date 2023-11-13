<script lang="ts">
import { defineComponent } from "vue";
import RoomItem from "@/components/RoomItem.vue";
import axios from "axios";

export default defineComponent({
  name: "HoveView",
  components: {
    RoomItem,
  },
  data() {
    return {
      rooms: [],
    };
  },
  async beforeMount() {
    this.rooms = await axios
      .get("http://localhost:3000/rooms")
      .then((response) => response.data)
      .catch((error) => console.log(`Algo deu errado 🫤👉 ${error}`));
  },
});
</script>

<template>
  <article>
    <RoomItem
      v-for="room in rooms"
      :key="room.id"
      :title="room.title"
      :description="room.description"
      :price="room.price"
      :img="room.img"
    />
  </article>
  <footer class="bg-header">
    <p>&copy; Instituto Evoluir</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 2rem;
}
</style>

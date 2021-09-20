<template>
  <div class="wall-container">
    <masonry-wall
      :items="items"
      :ssr-columns="1"
      :column-width="colWidth"
      :padding="50"
    >
      <template #default="{ item }">
        <Card
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :imageProp="item.image"
          @click="clickEvent(item.id)"
        />
      </template>
    </masonry-wall>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  data() {
    return {
      itemList: [
        {
          id: 0,
          title: "First",
          description: "The first item.",
        },
        {
          id: 1,
          title: "Second",
          description: "The second item.",
        },
        {
          id: 2,
          title: "Third",
          description: "The third item.",
        },
        { id: 3, title: "Fourth", description: "The fourth item." },
        { id: 4, title: "First", description: "The first item. This is a long description. Making it even longer is not a good idea for the user to be able to use. Hehe this is going into lines." },
        {
          id: 5,
          title: "Second",
          description: "The second item.",
        },
        { id: 6, title: "Third", description: "The third item." },
        {
          id: 7,
          title: "Fourth",
          description: "The fourth item.",
        },
      ],
    };
  },
  computed: {
    items() {
      return [
        ...this.itemList,
        {
          id: -1,
          title: "Add a topic",
          description:
            "Don't find the topic of your choice listed? Click on this card to add your own topic to the collection!",
          image: "plus-icon.svg",
        },
      ];
    },
  },
  components: {
    Card,
  },
  props: {
    height: {
      type: String,
      default: "300px",
    },
    colWidth: {
      type: Number,
      default: 320,
    },
  },
  methods: {
    clickEvent(id) {
      if (id === -1) {
        alert('This is area is under construction!');
        return;
      }
      this.$emit("clicked", {
        ...this.items.filter((item) => item.id == id)[0],
      });
    },
  },
};
</script>

<style scoped>
.wall-container {
  margin: 0 auto;
  max-width: 80%;
  padding: 16px;
  margin-bottom: 100px;
}
</style>

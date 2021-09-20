<template>
  <div class="card">
    <div class="block">
      <div v-if="id !== -1" class="info">
        {{ randomInt() }} people chilling out here
      </div>
      <img
        :src="require('../assets/' + image)"
        :alt="title"
        :style="'width: 100%;' + addItemStyles"
      />
    </div>
    <div class="container">
      <h2>
        <b>{{ title }}</b>
      </h2>
      <br />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: Number,
    title: String,
    description: String,
    imageProp: {
      type: String,
    },
  },
  computed: {
    image() {
      return this.imageProp || "img_avatar.png";
    },
    addItemStyles() {
      if (this.id !== -1) {
        return "";
      } else {
        return `
          padding: 20%;
        `;
      }
    },
  },
  methods: {
    randomInt() {
      return Math.floor(Math.random() * 100);
    },
  },
};
</script>

<style scoped>
.card {
  /*box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);*/
  box-shadow: 8px 8px 13px #151a1e, -8px -8px 13px #232a32;

  /*transition: 0.3s;*/
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
}
.card:hover {
  /*box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2);*/
  background: linear-gradient(145deg, #1e242b, #191f24);
}
.card:active {
  box-shadow: inset 8px 8px 13px #151a1e, inset -8px -8px 13px #232a32;
}

.container {
  /*left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: relative;*/
  padding: 32px 16px;
}

.block {
}

img {
  /*z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(0.35);*/
  /* height: 100%;

  position: absolute;
  top: 0;
  left: 0;*/
}

.info {
  /*position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #1c2228;
  padding: 2px 10px;
  border-radius: 0 0 10px 0;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  color: black;*/

  font-size: 1.1em;
  padding: 14px 0;
}

p {
  font-size: 1.1em;
}
</style>

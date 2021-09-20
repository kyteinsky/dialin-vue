<template>
  <div v-if="selected">
    <ChannelPage
      :channelName="channelName"
      :nPeople="nPeople"
      @clicked="backEvent"
    />
  </div>
  <div v-else>
    <div class="heading">Welcome to DialIn</div>
    <div class="desc">Choose from a topic below and start a conversation</div>
    <Spacer height="100px" />
    <Wall @clicked="selectEvent" />
  </div>
</template>

<script>
import Wall from "./components/MasonryWall.vue";
import Spacer from "./components/Spacer.vue";
import ChannelPage from "./components/ChannelPage.vue";

export default {
  name: "App",
  components: {
    Wall,
    Spacer,
    ChannelPage,
  },
  data() {
    return {
      channelName: "",
      nPeople: 0,
      selected: false,
    };
  },
  methods: {
    selectEvent(obj) {
      this.channelName = obj.title;
      this.nPeople = 36;
      this.selected = true;
    },
    backEvent() {
      this.selected = false;
      this.channelName = "";
      this.nPeople = 0;
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.heading {
  font-size: 4em;
}
.desc {
  font-size: 2em;
  margin-top: 2em;
}
</style>

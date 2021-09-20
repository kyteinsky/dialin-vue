<template>
  <div class="back_btn" @click="clickEvent">
    <img src="../assets/left-svgrepo-com.svg" />
  </div>

  <div class="heading">{{ channelName }} Channel</div>
  <div class="desc">Call on the given phone number to drop into conversation with {{ nPeople }} people</div>
</template>

<script>
export default {
  name: 'ChannelPage',
  props: {
    channelName: String,
    nPeople: Number,
  },
  methods: {
    clickEvent() {
      this.$emit('clicked', {})
    }
  }
}
</script>

<style scoped>
img {
  height: 48px;
  width: 48px;
  transform: translate(-2px, 0);
}
.back_btn {
  height: 64px;
  width: 64px;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  border-radius: 100px;
  background: inherit;
  box-shadow:
    6px 6px 12px #181d22,
    -6px -6px 12px #20272e;
}
.back_btn:hover {
  background: linear-gradient(145deg, #1e242b, #191f24);
}
.back_btn:active {
  box-shadow:
    inset 6px 6px 12px #181d22,
    inset -6px -6px 12px #20272e;
}
</style>

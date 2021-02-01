<template>
  <div id="app">
    <img src = "../img/cartel.jpg" width="100%"><br>
    <br><flip-countdown :deadline="deadline3"></flip-countdown>
  </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";
import moment from "moment";
const fmt = "YYYY-MM-DD HH:mm:ss";
export default {
  name: "app",
  components: {
    FlipCountdown,
  },
  data() {
    return {
      deadline3: moment()
        .add(219, "d")
        .add(15, "h")
        .add(32, "m")
        .add(48, "s")
        .format(fmt),
    };
  },
  computed: {
    deadline1: function () {
      return moment(this.deadline1ts).format(fmt);
    },
  },
  methods: {
    timeElapsedHandler: function () {
      // console.warn('Count Down Elapsed!!!')
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.more {
  margin: 30px 0;
}
button {
  margin: 10px;
}
</style>
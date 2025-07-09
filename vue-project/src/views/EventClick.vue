<template>
  <h3>Event</h3>
  <p :key="i" v-for="(num, i) in list">
    <button @click="ClickFnc(num)">이벤트클릭</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      list: [10, 20, 30],
    };
  },
  methods: {
    ClickFnc(num) {
      alert(num + " 클릭함");
    },
  },
};
</script>

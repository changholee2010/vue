<script setup>
import ComponentVue from "./ComponentVue.vue";

defineProps({
  title: {
    type: String,
    required: true,
    default: "Hello",
  },
  contents: {
    type: String,
    default: "This is start vue project",
  },
  ahah: {
    type: String,
    default: "prop message",
  },
});
</script>

<template>
  <h3>{{ title }}</h3>
  <p v-text="contents"></p>
  <ComponentVue :msg="ahah"></ComponentVue>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

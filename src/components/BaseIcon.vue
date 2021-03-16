<template>
  <div>
    <i class="material-icons text-2xl md:text-4xl block text-center">{{
      icon
    }}</i>
    <p class="text-center mt-2 text-sm font-semibold md:text-xl">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    icon: String,
    title: String,
  },
};
</script>

<style></style>

<template>
  <article
    class="flex flex-col overflow-hidden rounded-lg shadow-lg p-3 mr-2"
    :class="backcolor"
  >
    <div class="text-center mb-6">
      <i :class="icon"></i>
    </div>
    <p class="text-white text-sm mt-1">
      {{ title }}
    </p>
  </article>
</template>

<script>
export default {
  name: "BaseCardIcon",
  props: {
    icon: String,
    title: String,
    backcolor: String,
  },
};
</script>

<style></style>

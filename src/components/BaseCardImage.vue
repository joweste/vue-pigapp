<template>
  <article
    class="flex flex-col overflow-hidden rounded-lg shadow-lg p-3 mr-2"
    :class="backcolor"
  >
    <div class="text-center mb-1">
      <img
        alt="Placeholder"
        class="block h-12 w-12 mt-1 mx-auto"
        :src="require(`@/assets/${image}`)"
      />
    </div>
    <p class="text-white text-sm mt-1">
      {{ title }}
    </p>
  </article>
</template>

<script>
export default {
  name: "BaseCardImage",
  props: {
    image: String,
    title: String,
    backcolor: String,
  },
  methods: {
    //
  },
};
</script>

<style></style>

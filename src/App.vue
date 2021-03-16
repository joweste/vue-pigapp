<template>
  <div id="app" class="h-screen w-full">
    <div class="flex flex-col  mt-6">
      <div class="m-auto">
        <div class="mt-12"><Login /></div>
        <div class="mt-12"><Register /></div>
      </div>
    </div>
    <!-- <div class="mx-auto mt-6">
      <Register />
    </div> -->
  </div>
</template>

<script>
import Login from "@/views/Login";
import Register from "@/views/Register";
export default {
  name: "app",
  components: { Login, Register },
  data: () => ({}),
  methods: {},
};
</script>

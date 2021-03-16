<template>
  <div>
    <div class="grid_login">
      <div class="item1">
        <div class="rounded-full h-24 w-24 grad_circle mt-16 ml-28"></div>
        <div class="rounded-full h-32 w-32 grad_circle mt-2 ml-auto mr-4"></div>
        <div class="ml-16 mr-4">
          <div class="font-bold text-2xl font-mono text-white">
            Novo por aqui!
          </div>
          <div class="font-bold text-md font-mono text-white">
            Crie uma conta para ver nossas principais escolhas para você.
          </div>
        </div>
        <div class="rounded-full h-48 w-48 grad_circle ml-8 align-bottom"></div>
      </div>
      <div class="item2">
        <img class="mx-auto w-64 h-32" src="@/assets/image1.png" alt="" />
        <div class="px-10">
          <button class="text-black focus:outline-none px-2 py-3">
            <p>
              <span class="bg-clip-text text-sm">Login</span>
            </p>
          </button>

          <button class="text-gray-500  focus:outline-none px-2 py-3">
            <p class="text-sm border-b-2 border-gray-300 ">
              <span
                class="bg-clip-text text-sm text- text-transparent bg-gradient-to-r from-degrade_rose_i to-degrade_rose_f border-b-2 border-degrade_rose_i"
              >
                Register</span
              >
            </p>
          </button>
          <div class="text-left text-sm  px-3 mb-3 text-black">
            Informe qual o tipo de conta deseja criar
          </div>
          <div class="flex">
            <BaseCardImage
              image="image6.svg"
              title="Pessoa Fisica"
              backcolor="bg-rosa"
            />
            <BaseCardImage
              image="image5.svg"
              title="Pessoa Jurídica"
              backcolor="bg-rosa"
            />
          </div>
        </div>
        <div class="px-10 butprox mb-6">
          <div class="text-center mb-6">
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <button
            class="text-white font-semibold focus:outline-none rounded-md w-full p-2 bg-gradient-to-r from-degrade_rose_i to-degrade_rose_f"
          >
            <p><span class="">Próximo</span></p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCardImage from "@/components/BaseCardImage";
export default {
  components: { BaseCardImage },
};
</script>

<style lang="postcss" scoped>
.grid_login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-content: center;
  max-width: 900px;
}
.item1 {
  background: linear-gradient(180deg, #f4ae97 0%, #f7d4ca 100%);
  height: 100%;
}
.grad_circle {
  background: linear-gradient(180deg, #f4ae97 0%, #f7d4ca 100%);
}
.item2 {
  display: grid;
  grid-template-columns: 1fr;
}
.item2 .butprox {
  align-self: end;
}
</style>

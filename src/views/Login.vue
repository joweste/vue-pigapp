<template>
  <div>
    <!-- <ol className="p-4">
      <li
        class="feed-item relative pb-5 pl-6 border-l-2 border-red-300 last:border-transparent"
      >
        <time
          className="block text-gray-500 relative uppercase text-sm -top-1"
          dateTime="9-25"
        >
          Sep 25
        </time>
        <span className="text">
          Responded to need
          <a href="single-need.php">“Volunteer opportunity”</a>
        </span>
      </li>
      <li
        class="feed-item relative pb-5 pl-6 border-l-2 border-red-300 last:border-transparent"
      >
        <time
          className="block text-gray-500 relative uppercase text-sm -top-1"
          dateTime="9-25"
        >
          Sep 25
        </time>
        <span className="text">
          Responded to need
          <a href="single-need.php">“Volunteer opportunity”</a>
        </span>
      </li>
    </ol> -->
    <div class="grid_login">
      <div class="item1">
        <div
          class="rounded-full h-24 w-24 grad_circle mt-16 ml-28 bg-clip-text text-transparent"
        ></div>
        <div
          class="rounded-full h-32 w-32 grad_circle mt-2 ml-auto mr-4 bg-clip-text text-transparent"
        ></div>
        <div class="ml-20 mr-4">
          <div class="font-bold text-2xl font-mono text-white">
            Bem vindo!
          </div>
          <div class="font-bold text-md font-mono text-white">
            Ganha pontos e consiga receber seu troco de forma justa e rápida.
          </div>
        </div>
        <div
          class="rounded-full h-48 w-48 grad_circle ml-8 align-bottom bg-clip-text text-transparent"
        ></div>
      </div>
      <div class="item2">
        <img class="mx-auto w-64 h-32" src="@/assets/image1.png" alt="" />
        <div class="px-10">
          <button class="text-black focus:outline-none px-2 py-3">
            <p>
              <span
                class="bg-clip-text text-sm text-transparent bg-gradient-to-r to-degrade_azul_i from-degrade_azul_f border-b-2 border-degrade_azul_f"
                >Login</span
              >
            </p>
          </button>

          <button class="text-gray-500  focus:outline-none px-2 py-3">
            <p class="text-sm border-b-2 border-gray-300 ">Register</p>
          </button>
          <div class="p-3">
            <label
              for="email"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leila.mendes@plugin.com.br"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div class="p-3">
            <label
              for="senha"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Senha</label
            >
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div class="text-right text-sm block px-3 mb-3 text-gray-500">
            Esqueceu a Senha?
          </div>
          <div class="p-3">
            <button
              class="text-white font-semibold focus:outline-none rounded-md w-full p-2 bg-gradient-to-r to-degrade_azul_i from-degrade_azul_f"
            >
              <p><span class="">Entrar</span></p>
            </button>
          </div>

          <div class="text-center text-sm block px-3 mb-3 text-gray-500 mt-12">
            Não tem uma conta?
            <span class="text-degrade_azul_f">Registre-se agora!</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  background: linear-gradient(180deg, #89f7fe 0%, #17a8e6 100%);
  height: 100%;
}
.grad_circle {
  background: linear-gradient(180deg, #89f7fe 0%, #17a8e6 100%);
}
.feed-item::after {
  content: "";
  left: -7px;
  @apply block absolute top-0 w-3 h-3 bg-white border border-red rounded-full;
}
</style>

7x7x8

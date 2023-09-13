<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import { ref, onBeforeMount } from "vue";
import cars from "../data.json";

const car = ref(null);
const route = useRoute();
const router = useRouter();
const { id } = route.params;

onBeforeMount(() => {
  car.value = cars.find((c) => c.id === parseInt(id));
});
</script>

<template>
  <div class="container">
    <div v-if="car" class="relative">
      <h1 class="text-2xl font-semibold mb-12 text-center">
        The Car {{ car.make }}
      </h1>
      <img :src="car.img" class="h-[300px] mb-5" alt="" />
      <div class="flex gap-4">
        <p><span class="font-semibold">Make:</span> {{ car.make }}</p>
        <p><span class="font-semibold">Body:</span> {{ car.body }}</p>
        <p><span class="font-semibold">Price:</span> {{ car.price }}</p>
        <p><span class="font-semibold">Year:</span> {{ car.year }}</p>
      </div>
      <RouterView />
      <button class="absolute left-0 top-0" @click="router.back()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#000000"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          />
          <path
            fill="#000000"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          />
        </svg>
      </button>
    </div>
    <div v-else>
      <h1 class="text-2xl font-semibold mb-12">Error 404</h1>
    </div>
  </div>
</template>

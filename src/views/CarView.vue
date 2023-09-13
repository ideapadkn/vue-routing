<script setup>
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import cars from "../data.json";

const car = ref(null);
const route = useRoute();
const { id } = route.params;

onBeforeMount(() => {
  car.value = cars.find((c) => c.id === parseInt(id));
});
</script>

<template>
  <div class="container">
    <div v-if="car">
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
    </div>
    <div v-else>
      <h1 class="text-2xl font-semibold mb-12">Error 404</h1>
    </div>
  </div>
</template>

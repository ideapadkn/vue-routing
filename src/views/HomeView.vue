<script setup>
import carsData from "../data.json";
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const cars = ref(carsData);
const make = ref("");

onMounted(() => {
  console.log(route.query);
  make.value = route.query.make || "";
});

watch(make, () => {
  if (make.value) {
    if (make.value === "All") cars.value = carsData;
    else {
      cars.value = carsData.filter((c) => c.make === make.value);
    }
  }
});

const handleChange = () => {
  router.push({
    query: {
      make: make.value,
    },
  });
};
</script>

<template>
  <main class="container">
    <h1 class="text-2xl font-semibold mb-12">Cars</h1>
    <select
      @change="handleChange"
      class="border-2 outline-none mb-5"
      v-model="make"
    >
      <option value="All">All</option>
      <option value="Chevrolet">Chevy</option>
      <option value="Porsche">Porsche</option>
      <option value="Audi">Audi</option>
    </select>
    <div class="cards">
      <div
        @click="router.push(`/car/${car.id}`)"
        v-for="car in cars"
        :key="car.id"
        class="card"
      >
        <img class="h-[100px] mb-3" :src="car.img" :alt="car.id" />
        <h1 class="text-center text-xl font-semibold">{{ car.make }}</h1>
      </div>
    </div>
  </main>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 15px;
  width: 150px;
  cursor: pointer;
  transition: all 0.5s;
}
.card:hover {
  scale: 1.1;
}
.links {
  padding: 20px;
}
.links a {
  margin: 0 5px;
}
</style>

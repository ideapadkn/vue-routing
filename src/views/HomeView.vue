<script setup>
import carsData from "../data.json";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const cars = ref(carsData);
</script>

<template>
  <main class="container">
    <h1 class="text-2xl font-semibold mb-12">Cars</h1>
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

<script setup></script>

<template>
  <div class="container">
    <div class="links flex gap-5 items-center h-[80px]">
      <router-link active-class="active" to="/">Home</router-link>
      <router-link active-class="active" to="/about">About</router-link>
    </div>
  </div>
</template>

<style scoped>
.active {
  color: red;
}
</style>

<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
@import "@/assets/main.css";
</style>

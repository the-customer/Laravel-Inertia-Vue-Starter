<script setup>
import NavBar from './Components/NavBar.vue';
import Hero from './Components/Hero.vue';
import Footer from './Components/Footer.vue';
</script>

<template>
    <NavBar/>
    <Hero/>
    <main class="p-6">
        <slot />
    </main>

    <Footer/>
</template>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="translucent-header" elevated>
      <!-- <q-toolbar class="justify-center">
        <q-btn
        rounded 
        outline
        label="Home" to="/" class="text-white q-mx-sm" />
        <q-btn 
        rounded
        outline
        label="Projects" to="/projects" class="text-white q-mx-sm" />
      </q-toolbar> -->
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.translucent-header {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}
</style>

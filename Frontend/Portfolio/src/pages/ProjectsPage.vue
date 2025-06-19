<template>
  <q-page class="q-pa-xl">
    <h2 class="text-h5 text-center q-mb-lg">My YouTube Projects</h2>

    <div class="row q-col-gutter-lg q-mb-lg">
      <div class="col-xs-12 col-sm-6 col-md-4" v-for="video in videos" :key="video.id">
        <q-card class="my-card q-hoverable">
          <q-img :src="`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`" ratio="16/9" />

          <q-card-section>
            <div class="text-subtitle1">{{ video.title }}</div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat label="Watch" color="primary" :href="`https://youtu.be/${video.id}`" target="_blank" />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div class="text-center">
      <q-btn color="primary" label="Visit Full Channel" @click="goToYoutube" />
    </div>
  </q-page>
</template>

<script setup>
const videos = [
  { id: 'dQw4w9WgXcQ', title: 'My First Project' },
  { id: '9bZkp7q19f0', title: 'Another Cool Demo' },
  { id: '3JZ_D3ELwOQ', title: 'Behind the Scenes' }
]

function goToYoutube() {
  window.open('https://www.youtube.com/@Degr8Daniel', '_blank')
}
</script>

<style scoped>
.my-card {
  transition: transform 0.3s ease;
}
.my-card:hover {
  transform: scale(1.03);
}
</style>

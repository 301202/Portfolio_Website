<template>
  <q-page class="q-pa-xl flex flex-center items-center" style="background-color: #FEFAE0;">
    <h1 class="text-h1 q-mb-md">Daniel Seyram Tamakloe</h1>
    <div class="flex justify-center" style="height: 100vh; width: 100%;">
      <div>
        <q-avatar style="height: 100%; width: 100%;" class="q-mb-md">
          <q-icon rounded outline name="account_circle" size="4000%" color="#FFFFFF" />
        </q-avatar>      
      </div>
    </div>
    <div class="text-h3 flex justify-center">
      <q-card style="width: 95vw; background-color:#DDA15E;">
        <div class="q-pa-md text-center">
          <p>Hello, <br/>I am Daniel Seyram Tamakloe, <br/>a 3D artist, animator and programmer.</p>
          <q-btn class="q-mt-sm text-black" 
          label="Download My CV" 
          rounded
          outline
          :href="`https://github.com/301202`" 
          style="text-transform: none;" />

          <q-btn class="q-mt-sm text-black" 
          rounded
          outline
          color="primary"
          label="Send Me an Email" 
          style="text-transform: none; margin-left: 10%;" />
        </div>
      </q-card>
    </div>
  </q-page>
</template>

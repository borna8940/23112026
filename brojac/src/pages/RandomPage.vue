<template>
  <q-btn color="secondary" to="/" label="Go to Index Page" no-caps />

  <q-card class="my-card">
  </q-card>

  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section>
      <div class="text-h5">Random Joke</div>

      <p>{{ joke }}</p>

      <q-btn
        color="white"
        text-color="primary"
        label="Novi vic"
        @click="loadJoke"
      />
    </q-card-section>
  </q-card>
  <q-card class="my-card">
  </q-card>

  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section>
      <div class="text-h5">Random bored</div>

      <p>{{ bored }}</p>

      <q-btn
        color="white"
        text-color="primary"
        label="Novi bored"
        @click="loadBored"
      />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const joke = ref('Učitavanje...')
const bored = ref('Učitavanje...')

onMounted(() => {
  loadJoke()
})

async function loadJoke() {
  try {
    const result = await axios.get('https://dumbapis.com/joke')

    console.log(result.data.joke)

    joke.value = result.data.joke
  } catch (error) {
    console.error(error)
    joke.value = 'Greška pri učitavanju vica.'
  }
}
onMounted(() => {
  loadBored()
})

async function loadBored() {
  try {
    const result = await axios.get('https://proxy.cors.dev/https://bored-api.appbrewery.com/random')

    console.log(result.data)

    bored.value = result.data.activity
  } catch (error) {
  console.log('Greška:', error.message)
  console.log('Status:', error.response?.status)
  console.log('Podaci:', error.response?.data)

  bored.value = 'Ne mogu učitati vic.'
}
}
</script>

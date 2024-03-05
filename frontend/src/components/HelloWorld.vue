<script lang="ts" setup>
import {ref} from 'vue'
import { useToast } from "primevue/usetoast";

const toast = useToast();

const increaseCount = () => {
  count.value++

  if(count.value === 3) {
    toast.add({severity:'success', summary: 'PrimeVue', detail:'Welcome to PrimeVue + Create Vue', life: 3000})

    count.value = 0
  }
}

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center mt-5">
    <Toast />
  
    <h3 class="text-lg mb-5">
      <a href="https://vitejs.dev/" target="_blank" class="text-blue-500 hover:text-blue-700" rel="noopener">Vite</a> +
      <h1 class="underline text-pink-500">
        Hello world!
      </h1>
      <a href="https://www.primefaces.org/primevue/" target="_blank" class="text-blue-500 hover:text-blue-700" rel="noopener">PrimeVue</a>.
    </h3>

    <Button @click="increaseCount" label="Count" class="mt-5"></Button>
    <h5 class="mt-5 text-pink-500">{{ count }}</h5>
  </div>
</template>

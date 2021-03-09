<template>
  [Desktop Page]
  <h1>Home (Desktop)</h1>
  <p>
    <img src="/src/assets/logo.png" alt="logo" />
  </p>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <Foo />
</template>
<script lang="ts">
import { reactive, defineComponent } from 'vue'
export default defineComponent({
  async setup() {
    const state = reactive({ count: 0 })
    return {state}
  },
})
</script>
<style scoped>
h1,
a {
  color: green;
}
</style>

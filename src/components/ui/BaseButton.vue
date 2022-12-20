<template>
  <button>
    {{ name }}
  </button>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style scoped>
button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button.active {
  border-color: #760ab4;
  background-color: #760ab4;
}
</style>
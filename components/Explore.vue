<script setup>
defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p>
      Explore <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ionicframework.com/docs/components"
      >UI Components</a>
    </p>
  </div>
</template>

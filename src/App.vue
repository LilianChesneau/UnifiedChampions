<template>
  <nav>
    <RouterLink to="/" class="text-blue-600 underline">Page présentation</RouterLink>
    <RouterLink to="/" class="text-blue-600 underline">Page joueurs</RouterLink>
  </nav>

  <RouterView />
</template>

<script>
export default {
  components: {},
};
</script>
<template>
  <a
    v-bind:href="url"
    class="nav-link"
  >
    <slot>navLink</slot>
  </a>
</template>

<script>

export default {
  name: 'baseLink',
  props: {
    url: String
  },
}
</script>
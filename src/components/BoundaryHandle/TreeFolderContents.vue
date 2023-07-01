<template>
  <ul>
    <li v-for="child in children" :key="child.key">
      <tree-folder v-if="child.children" :folder="child"/>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
import TreeFolder from './TreeFolder.vue';

export default {
  name: 'tree-folder-content',
  components: {
    ['tree-folder']: TreeFolder
  },
  props: {
    children: Array
  },
  data: function () {
    return {}
  }
}
</script>
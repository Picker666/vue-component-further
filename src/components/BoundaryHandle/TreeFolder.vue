<template>
  <p>
    <span>{{ folder.name }}</span>
    <tree-folder-contents :children="folder.children"/>
  </p>
</template>

<script>
export default {
  name: "tree-folder",
  components: {
    TreeFolderContents: () => import('./TreeFolderContents.vue')
  },
  beforeCreate: async function () {
    // this.$options.components.TreeFolderContents = require('./TreeFolderContent.vue').default
  },
  props: {
    folder: Object
  }
}
</script>
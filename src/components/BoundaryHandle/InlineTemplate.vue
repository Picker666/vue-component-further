<template>
  <div>
    "this is origin template..." {{ counter }}
    {{ children }}
  </div>
</template>

<script>
export default {
  name: 'inline-template',
  data: function () {
    return {
      counter: 1
    }
  }
}
</script>
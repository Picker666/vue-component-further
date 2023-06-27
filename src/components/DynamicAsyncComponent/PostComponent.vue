<template>
  <div>
    <h3>this is Post Component...</h3>
    <span @click="count ++">{{ count }}</span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0
    }
  }
}
</script>
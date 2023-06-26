<template>
  <div>
    <h1>{{ serialNumber }}、{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "needName",
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: function () {
    return {
      title: "",
    }
  }
}
</script>
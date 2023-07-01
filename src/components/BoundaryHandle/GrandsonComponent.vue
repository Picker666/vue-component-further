<template>
  <div>
    <h3>{{ serialNumber }}、{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "GrandsonComponent",
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  inject: ['boundaryHandler'],
  data: function () {
    return {
      title: "Grandson Component",
    }
  },
  created: function () {
    this.boundaryHandler(this.title);
  },
}
</script>
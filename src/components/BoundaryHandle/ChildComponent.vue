<template>
  <div>
    <h2>{{ serialNumber }}、{{ title }}</h2>
    <GrandsonComponent :serialNumber="1" />
  </div>
</template>

<script>
import GrandsonComponent from './GrandsonComponent.vue';
export default {
  name: "ChildComponent",
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  components: {
    GrandsonComponent
  },
  data: function () {
    return {
      title: "Boundary Handle Child Component",
    }
  },
  created: function () {
    this.$parent.boundaryHandler(this.title);
    console.log('======this.$parent.title: ' + this.$parent.title);
    console.log('======this.$parent.serialNumber: ' + this.$parent.serialNumber);
  },
  methods: {
    childFunc(callingTitle) {
      console.log('======this is child function, calling by ' + callingTitle);
    }
  }
}
</script>
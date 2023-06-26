<template>
  <span>
  <input
        type="checkbox"
        :name="name"
        id="baseCheckbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
      <label for="baseCheckbox">{{ name }}</label>
  </span>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    name: {
      type: String,
      require: true,
    }
  },
}
</script>
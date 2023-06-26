<template>
  <div>
    <h1>{{ serialNumber }}、{{ title }}</h1>
    <MyComponent @custom-event="customEvent" />
    <p>{{ count }}</p>

    <base-checkbox name="Picker" v-model="checkValue" />
    <base-input-box name="Christine" v-model="value" v-on:focus="onFocus"/>

    <!-- <TextDoc v-bind="doc" @update:title="updateTitle"/> -->
    <!-- <TextDoc :content="doc.content" v-bind:title.sync="doc.title"/> -->
    <TextDoc v-bind.sync="doc"/>
    <hr>
  </div>
</template>

<script>
const MyComponent = {
  name: 'my-component',
  methods: {
    handleClick() {
      this.$emit('custom-event');
    }
  },
  template: `
    <div>
      <p>custom event</p>
      <button @click="handleClick">Click</button>
    </div>
  `
}

const TextDoc = {
  name: 'text-doc',
  props: ['title', 'content'],
  template: `
    <div>
      <h3 @click="$emit('update:title', 'Christine  666...')">{{ title }}</h3>
      <p @click="$emit('update:content', 'this is content Christine  666...')">{{ content }}</p>
    </div>
  `
}

export default {
  name: "CustomEvent",
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    },
  },
  components: {
    MyComponent,
    TextDoc
  },
  data: function () {
    return {
      title: "Custom Event",
      count: 0,
      checkValue: false,
      value: '',
      doc: {
        title: 'document title...',
        content: 'this is document content...'
      }
    }
  },
  methods: {
    customEvent() {
      console.log('============');
      this.count++;
    },
    onFocus() {
      console.log('==============');
    },
    updateTitle() {
      this.doc.title = 'Picker 666!'
    }
  }
}
</script>
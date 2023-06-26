<template>
  <div>
    <h1>{{ serialNumber }}、{{ title }}</h1>
    <BlogPost v-bind="blogPost" :num="count"/>
    <button @click="countPlus">count({{ count }}) +1</button>

    <hr>
  </div>
</template>

<script>

const BlogPost = {
  name: 'blogPost',
  props: {
    name: String,
    company: String,
    num: Number,
  },
  computed: {
    counter() {
      return this.num * 2;
    }
  },
  template: `<div>
    <p>{{name}} - {{company}}</p>
    <p>{{counter}}</p>
    </div>`
}

export default {
  name: "PropsTransfer",
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  components: {
    BlogPost
  },
  data: function () {
    return {
      title: "Props Transfer",
      blogPost: {
        name: 'Picker blog',
        company: 'secret...'
      },
      count: 0
    }
  },
  methods: {
    countPlus() {
      this.count++;
    }
  }
}
</script>
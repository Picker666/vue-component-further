<template>
  <div>
    <h1>{{ serialNumber }}、{{ title }}</h1>
    <base-link url="www.baidu.com">
      Picker 666
    </base-link>
    <!-- 后备内容 -->
    <base-link url="www.baidu.com"></base-link>
    <!-- 具名插槽 -->
    <NameSlot>
      <template  v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </NameSlot>
    <!-- 作用域插槽 -->
    <CurrentUser></CurrentUser>

    <CurrentUser>
      <template v-slot:default="slotProps">
          {{ slotProps.user.firstName }}
      </template>
    </CurrentUser>

    <!-- 独占默认插槽的缩写语法 -->
    <CurrentUser v-slot="slotProps">
      {{ slotProps.user.firstName }}
    </CurrentUser>

    <CurrentUser>
      <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
      <template v-slot:other="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </CurrentUser>

    <!-- 解构插槽 Prop -->
    <CurrentUser>
      <template v-slot:default="{user}">
        {{ user.firstName }}
      </template>
      <template v-slot:other="{user: { firstName }}">
        {{ firstName }}
      </template>
    </CurrentUser>

    <CurrentUser :handleClick="changeSlotName">
      <template v-slot:[dynamicSlotName]="{ user }">
        {{ user.firstName }}
      </template>
    </CurrentUser>

    <!-- 具名插槽的缩写 -->
    <NameSlot>
      <template  #header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </NameSlot>

    <!-- other -->
    <ToDoList>
      <template #todo="{ todo: {id, text, completed } }">
        <span v-if="completed">√</span>
        {{ id }}、{{ text }}
      </template>
    </ToDoList>
    <hr>
  </div>
</template>

<script>
import NameSlot from './NameSlot.vue';
import CurrentUser from './CurrentUser.vue';
import ToDoList from './ToDoList.vue';

export default {
  name: "SlotComponent",
  components: {
    NameSlot,
    CurrentUser,
    ToDoList
  },
  props: {
    serialNumber: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: function () {
    return {
      title: "Slot Component",
      dynamicSlotName: 'default'
    }
  },
  methods: {
    changeSlotName: function (name) {
      console.log('name: ', name);
      this.dynamicSlotName = name;
    }
  }
}
</script>
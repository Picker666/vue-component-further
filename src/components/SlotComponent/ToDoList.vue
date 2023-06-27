<template>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      <slot name="todo" :todo="todo">{{ todo.text }}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      todoList: [
        { id: 1, text: 'Picker to do something...', completed: false },
        { id: 2, text: 'Christine to do something...', completed: true },
        { id: 3, text: 'Borry to do something...', completed: true },
        { id: 4, text: 'Borry to do something, too...', completed: false }
      ],
    }
  }
}
</script>
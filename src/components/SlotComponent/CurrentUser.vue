<template>
  <div>
    当前的用户是：
    <span @click="handleClick('other')">
      <slot v-bind:user="user" >{{ user.lastName }}</slot>
    </span>
    <span @click="handleClick('default')">
      <slot name="other" v-bind:user="otherUser">{{ otherUser.lastName }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    handleClick: Function
  },
  data: function () {
    return {
      user: {
        lastName: 'Ren',
        firstName: 'Picker'
      },
      otherUser: {
        lastName: 'Ren',
        firstName: 'Christine'
      }
    }
  }
}
</script>
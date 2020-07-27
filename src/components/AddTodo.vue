<template>
  <form @submit.prevent="handleAddTodo">
    <input
      type="text"
      placeholder="Enter a todo"
      v-model="input"
    >
    <input type="submit" value="Add">
  </form>
</template>

<script>
export default {
  name: 'AddTodo',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    handleAddTodo () {
      if (this.input) {
        const newTodo = {
          id: Date.now(),
          title: this.input,
          completed: false
        }
        this.$emit('todo:add', newTodo)
        this.input = ''
      }
    }
  }
}
</script>

<style scoped>
form {
  margin: 2em auto;
  width: 400px;
  display: flex;
  justify-content: center;
}

input {
  padding: 0.25em;
}
input[type="text"] {
  flex-grow: 1;
}
</style>

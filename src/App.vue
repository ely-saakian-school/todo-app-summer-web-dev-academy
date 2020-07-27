<template>
  <div id="app">
    <TheHeader></TheHeader>
    <AddTodo @todo:add="addTodo"></AddTodo>
    <TodoList
      :todos="todosList"
      @todo:delete="deleteTodo"
    ></TodoList>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TheHeader,
    TodoList,
    AddTodo
  },
  data () {
    return {
      todosList: [
        {
          id: 1,
          title: 'kajdnfg',
          completed: false
        },
        {
          id: 2,
          title: 'kajdnfg',
          completed: true
        },
        {
          id: 3,
          title: 'kajdnfg',
          completed: false
        }
      ]
    }
  },
  methods: {
    addTodo (newTodo) {
      this.todosList = [...this.todosList, newTodo]
    },
    deleteTodo (id) {
      this.todosList = this.todosList.filter(todo => {
        return todo.id !== id
      })
    }
  },
  created () {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(json => this.todosList = json)
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

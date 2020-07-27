<template>
  <div>
    <transition mode="out-in" name="empty">
      <p v-if="!todos.length">No todos</p>
      <transition-group
        v-else
        name="list"
        tag="ul">
        <li
          v-for="todo in todos"
          :key="todo.id"
        >
          <div class="flex-container">
            <input type="checkbox" :checked="todo.completed">
            <div>{{ todo.title }}</div>
          </div>
          <div><button
            @click="$emit('todo:delete', todo.id)"
          >X</button></div>
        </li>
      </transition-group>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array
  }
}
</script>

<style scoped>
.empty-enter-active {
  transition: all 0.25s ease;
}
.empty-leave-active {
  transition: all 0.25s;
}
.empty-enter,
.empty-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
/* transition-group styles */
.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}

.list-leave-active button {
  display: none;
}

/* genral styling */
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  transform: scale(1.2);
  margin-right: 1em;
}
input:hover {
  cursor: pointer;
}
input[type="checkbox"]:checked + div {
  text-decoration: line-through;
}
ul {
  padding: 0;
  margin: 2em auto;
  width: 400px;
}
li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  transition: all 0.5s;
}
button {
  padding: 5px;
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 5px;
}
button:hover {
  background-color: white;
  cursor: pointer;
  color: #e53935;
}
p {
  text-align: center;
}
</style>

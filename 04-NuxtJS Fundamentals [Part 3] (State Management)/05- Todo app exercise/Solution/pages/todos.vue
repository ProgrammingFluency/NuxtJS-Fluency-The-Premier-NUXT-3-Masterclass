<template>
    <div>
        <h1>Todo List</h1>
        <input type="text" v-model="newTodo" placeholder="add a new todo">
        <button @click="addTodo">Add</button>
        <ul>
        <li v-for="todo in todos" :key="todo">
            {{ todo }}
            <button @click="removeTodo(todo)">Remove</button>
        </li>
        </ul>
    </div>
</template>

<script setup>
    const todos = useState('todos', () => [])
    const newTodo = useState(() => '')

    const addTodo = () => {
      todos.value.push(newTodo.value)
      newTodo.value = ''
    }

    const removeTodo = (todo) => {
      const index = todos.value.indexOf(todo)
      todos.value.splice(index, 1)
    }
</script>

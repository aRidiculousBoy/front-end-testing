<template>
  <div id="app">
    <todo-list />
  </div>
</template>

<script>
import TodoList from '@/views/TodoList'
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
}
</style>

<template>
  <div class="todo-list">
      <todo-list-header @add="addUndoItem"/>
      <undo-list :list="undoList" @delete="handleDelete"/>
  </div>
</template>

<script>
import TodoListHeader from './components/TodoListHeader/index.vue'
import UndoList from './components/UndoList'
export default {
  components: {
    TodoListHeader,
    UndoList
  },
  data() {
    return {
      undoList: [1, 2, 3]
    }
  },
  methods: {
    addUndoItem(content) {
      this.undoList.push(content)
    },
    handleDelete(index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped></style>

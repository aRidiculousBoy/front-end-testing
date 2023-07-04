<template>
  <div class="header">
    <div class="text">TodoList</div>
    <input type="text" v-model="keyword" data-test="search" @keyup.enter="handleAddTodoItem" placeholder="TodoItem">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      handleAddTodoItem() {
        if (this.keyword) {
          this.$emit('add', this.keyword)
          this.keyword = ''
        }
      }
    }
  }
</script>
<style lang="less">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  min-height: 72px;
  background-color: #4f383e;
  input[data-test="search"] {
    height: 28px;
    width: 320px;
    padding: 0 8px;
    border: none;
    outline: none;
  }
  .text {
    color: #fff;
    font-size: 24px;
  }
}
</style>

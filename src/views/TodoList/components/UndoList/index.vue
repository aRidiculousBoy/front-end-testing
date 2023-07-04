<template>
  <div class="undo-list">
    <div class="summary">
      <div class="running-text">正在进行</div>
      <span class="undo-count">{{ list.length }}</span>
    </div>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index" class="undo-item">
        <div>
          <input type="radio" :value="item" >
          <span class="undo-item-text">
            {{ item }}
          </span>
        </div>
        <span class="delete-action" @click="handleDelete(index)">--</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default: () => ([])
      }
    },
    data() {
      return {}
    },
    methods: {
      handleDelete(index) {
        this.$emit('delete', index)
      },

    }
  }
</script>

<style lang="less" scoped>
.undo-list {
  width: 720px;
  margin: 0 auto;
  .summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .running-text {
      font-size: 28px;
      font-weight: 700;
    }
    .undo-count {
      width: 24px;
      height: 24px;
      text-align: center;
      background-color: #bc84a8;
      color: #fff;
      border-radius: 50%;
    }
  }
  .list {
    margin-top: 12px;
    list-style: none;
    .undo-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 8px;
      background-color: #fff;
      .undo-item-text {
        margin-left: 4px;
      }
      &:hover {
        background-color: #f97d1c;
        cursor: pointer;
      }
      .delete-action {
        width: 32px;
        height: 32px;
        line-height: 32px;
        background-color: #baccd9;
        cursor: pointer;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        &:hover {
          background-color: #c02c38;
        }
      }
    }
  }
}
</style>

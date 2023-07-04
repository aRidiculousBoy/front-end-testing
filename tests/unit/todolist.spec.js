import { shallowMount } from '@vue/test-utils'
import TodoList from '@/views/TodoList'
import UndoList from '@/views/TodoList/components/UndoList'

describe('测试TodoList组件', () => {
  it('TodoList调用UndoList组件时,应传递list参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })
  it('TodoList监听到Header的add事件时，会增加一个内容', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    const content = 'hello world'
    wrapper.vm.addUndoItem(content)
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 'hello world'])
  })
})

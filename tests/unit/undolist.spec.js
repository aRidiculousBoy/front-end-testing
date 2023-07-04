import { shallowMount } from '@vue/test-utils'
import UndoList from '@/views/TodoList/components/UndoList'

describe('UndoList组件测试', () => {
  it('UndoList参数为[],count的值为0,且无列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: []
      }
    })
    const count = wrapper.find('.undo-count')
    expect(count.text()).toEqual('0')
    const items = wrapper.findAll('.undo-item')
    expect(items.length).toBe(0)
  })

  it('UndoList参数为[1, 2, 3],count的值为3,且有列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const count = wrapper.find('.undo-count')
    expect(count.text()).toEqual('3')
    const items = wrapper.findAll('.undo-item')
    expect(items.length).toBe(3)
  })

  it('undolist点击删除按钮的时候,触发删除操作', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const count = wrapper.find('.undo-count')
    expect(count.text()).toEqual('3')
    const items = wrapper.findAll('.undo-item')
    const deleter = items.at(0).find('.delete-action')
    deleter.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
  })
})

import { shallowMount } from '@vue/test-utils'
import Header from '@/views/TodoList/components/TodoListHeader'

describe('Todolist-Header组件测试', () => {
  it('header应该有一个搜索框', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.contains('[data-test="search"]')).toBeTruthy()
  })

  it('header中搜索框的初始内容为空', () => {
    const wrapper = shallowMount(Header)
    const modelValue = wrapper.vm.$data.keyword
    expect(modelValue).toEqual('')
  })

  it('修改搜索框内容时，绑定值需要更新', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="search"]')
    input.setValue('hello world')
    expect(wrapper.vm.$data.keyword).toEqual('hello world')
  })

  it('当输入框内容为空时，输入回车不需要发出事件', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="search"]')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('当输入框有内容时，向外触发事件，同时清空输入框', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="search"]')
    input.setValue('hello world')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.keyword).toBe('')
  })

  it('Header样式发生改变时，做出提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot() // 快照记录
  })
})

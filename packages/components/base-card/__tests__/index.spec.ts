// 导入 Vue Test Utils 内的 `shallowMount` 和待测试的组件
import { shallowMount } from '@vue/test-utils'
import BaseCard from '../index.vue'

// 挂载这个组件
const wrapper = shallowMount(BaseCard)

// 这里是一些 Jest 的测试，你也可以使用你喜欢的任何断言库或测试
describe('BaseCard', () => {
  // 检查原始组件选项
  // it('has a created hook', () => {
  //   expect(typeof BaseCard.created).toBe('function')
  // })

  // // 评估原始组件选项中的函数的结果
  // it('sets the correct default data', () => {
  //   expect(typeof BaseCard.data).toBe('function')
  //   const defaultData = BaseCard.data()
  //   expect(defaultData.message).toBe('hello!')
  // })

  // 检查 mount 中的组件实例
  it('correctly sets the title when created', () => {
    expect(wrapper.vm.$data.title).toBe('bye!')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct title', () => {
    expect(wrapper.text()).toBe('bye!')
  })
})

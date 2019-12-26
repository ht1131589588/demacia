import { connect } from 'react-redux'
import createModel from './createModel'

/**
 *
 * @param {Object} model
 * {
 *  namespace, // model 命名空间
 *  state, 初始值
 *  reducers，唯一可以修改state的地方，由action触发
 *  effects，用于处理异步操作和业务逻辑，不直接修改 state。由 action 触发，可以触发 action，可以和服务器交互，可以获取全局 state 的数据等等。
 * }
 */
export default function model(model) {
  const { selectors } = createModel(model)

  function wrap(Comp) {
    return connect(selectors)(Comp)
  }

  return wrap
}

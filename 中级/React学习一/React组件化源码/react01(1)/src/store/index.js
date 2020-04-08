//创建一个仓库
import { createStore }  from 'redux'
import Reducers from './reducers'

let store = createStore(Reducers);

export default store;

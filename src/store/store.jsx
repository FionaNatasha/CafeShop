import {createStore} from 'redux'
import reducers from './combineRedusers'



let store = createStore(reducers)




export default store
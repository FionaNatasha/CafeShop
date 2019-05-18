import { combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import MainList from './MainListReducer'
import OrderPrice from './OrderOrice'


let reducers = combineReducers({
    MainList,
    form:formReducer,
    OrderPrice
})
export default reducers
import { combineReducers } from 'redux'

/* reducers */
import home from '@reducers/home/reducer'
import community from '@reducers/community/reducer'

const rootReducer = combineReducers({
    home,
    community,
})

export default rootReducer

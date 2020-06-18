/* Constants */
import FetchStatus from '@constants/fetchStatus'
import Constants from './constants'

const initialState = {
    categories: [],
    fetchStatus: FetchStatus.NULL,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants.SET_HOME_CATEGORIES: {
            return Object.assign({}, state, { categories: payload })
        }

        case Constants.SET_HOME_CATEGORIES_FETCH_STATUS: {
            return Object.assign({}, state, { fetchStatus: payload })
        }

        case Constants.RESET_APP_REDUCER: {
            return Object.assign({}, state, initialState)
        }

        default: {
            return state
        }
    }
}

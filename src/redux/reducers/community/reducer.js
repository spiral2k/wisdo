/* Constants */
import FetchStatus from '@constants/fetchStatus'
import Constants from './constants'

const initialState = {
    item: null,
    steps: [],
    values: {},
    fetchStatus: FetchStatus.NULL,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants.SET_ITEM: {
            return Object.assign({}, state, { item: payload })
        }

        case Constants.SET_ITEM_STEPS: {
            return Object.assign({}, state, { steps: payload })
        }

        case Constants.SET_STEP_VALUE: {
            return Object.assign({}, state, { values: { ...state.values, ...payload } })
        }

        case Constants.SET_ITEM_FETCH_STATUS: {
            return Object.assign({}, state, { fetchStatus: payload })
        }

        case Constants.RESET_COMMUNITY_REDUCER: {
            return Object.assign({}, state, initialState)
        }

        default: {
            return state
        }
    }
}

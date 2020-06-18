/* API */
import * as WisdoAPI from '@api/wisdow'

/* constants */
import FetchStatus from '@constants/fetchStatus'
import Constants from './constants'

export const setFetchStatus = fetchStatus => ({ type: Constants.SET_HOME_CATEGORIES_FETCH_STATUS, payload: fetchStatus })

const setCategories = values => ({ type: Constants.SET_HOME_CATEGORIES, payload: values })

export const getFeed = () => async dispatch => {
    try {
        dispatch(setFetchStatus(FetchStatus.FETCHING))

        const feed = await WisdoAPI.getFeed()
        dispatch(setCategories(feed))

        dispatch(setFetchStatus(FetchStatus.FETCHED))
    } catch (e) {
        // handle error
        dispatch(setFetchStatus(FetchStatus.ERROR))
    }
}

export const reset = () => ({ type: Constants.RESET_HOME_REDUCER })

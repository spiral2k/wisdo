/* constants */
/* API */
import * as WisdoAPI from '@api/wisdow'

/* constants */
import FetchStatus from '@constants/fetchStatus'
import Constants from './constants'

export const setFetchStatus = fetchStatus => ({ type: Constants.SET_ITEM_FETCH_STATUS, payload: fetchStatus })

export const setSteps = steps => ({ type: Constants.SET_ITEM_STEPS, payload: steps })

export const setItem = item => ({ type: Constants.SET_ITEM, payload: item })

export const setStepValue = valueObj => ({ type: Constants.SET_STEP_VALUE, payload: valueObj })

export const getItemByID = item => async dispatch => {
    try {
        dispatch(setFetchStatus(FetchStatus.FETCHING))

        const itemResponse = await WisdoAPI.getLifeChallange(item.lifeChallengeId)

        if (!Array.isArray(itemResponse) || !itemResponse[0]) {
            // handle error
            return
        }

        const ffefe = itemResponse[0]

        dispatch(setSteps(ffefe.steps))
        delete ffefe.steps
        dispatch(setItem(ffefe))
        dispatch(setFetchStatus(FetchStatus.FETCHED))
    } catch (e) {
        dispatch(setFetchStatus(FetchStatus.ERROR))
        // handle error
    }
}

export const reset = () => ({ type: Constants.RESET_COMMUNITY_REDUCER })

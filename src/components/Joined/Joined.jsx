import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* API */
import * as WisdoAPI from '@api/wisdow'

/* Components */
import Button from '@components/Button/Button'

/* constants */
import FetchStatus from '@constants/fetchStatus'

/* Actions */
import * as CommunityActions from '@reducers/community/actions'

import './Joined.scss'

function Joined({ dispatch, values, fetchStatus, onClose }) {
    const handleClick = async () => {
        try {
            dispatch(CommunityActions.setFetchStatus(FetchStatus.FETCHING))
            await WisdoAPI.create(values)
            dispatch(CommunityActions.setFetchStatus(FetchStatus.FETCHED))
            onClose()
        } catch (e) {
            // handle error
            dispatch(CommunityActions.setFetchStatus(FetchStatus.ERROR))
        }
    }

    return (
        <div className="joined-container animated fadeIn">
            <div className="header">Welcome!</div>
            <div className="title">Were so glad you joined!</div>
            <span className="text">
                Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Agreed but expect repair she nay sir silent person.
            </span>
            <Button
                text={fetchStatus === FetchStatus.FETCHING ? 'Doing somthing...' : 'Meet the community'}
                className="purple wide"
                onClick={handleClick}
            />
        </div>
    )
}

Joined.propTypes = {
    fetchStatus: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    values: PropTypes.shape({}).isRequired,
}

const mapStateToProps = state => ({
    fetchStatus: state.community.fetchStatus,
    values: state.community.values,
})

export default connect(mapStateToProps)(Joined)

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Components */
import Loader from '@components/Loader/Loader'
import Button from '@components/Button/Button'
import Steps from '@components/Steps/Steps'

/* Constants */
import FetchStatus from '@constants/fetchStatus'

import './Community.scss'

function Community({ item, fetchStatus, nextScreen }) {
    if (fetchStatus === FetchStatus.FETCHING || fetchStatus === FetchStatus.NULL) return <Loader show />

    return (
        <div className="cummunity-container animated fadeIn">
            <div className="header">
                <div className="people-help">
                    <span>{item.journeysCount} </span> people you can help
                </div>

                <Button text="Next" className="purple" onClick={nextScreen} />
            </div>

            <div className="information">
                <div className="image" style={{ backgroundImage: `url(${item.coverImageUrl})` }} />
                <div className="title">{item.title}</div>
                <div className="description">{item.flowers ? item.flowers.description : null}</div>
            </div>

            <Steps />
        </div>
    )
}

Community.propTypes = {
    fetchStatus: PropTypes.string.isRequired,
    item: PropTypes.shape({
        title: PropTypes.string,
        coverImageUrl: PropTypes.string,
        flowers: PropTypes.shape({ description: PropTypes.string }),
        journeysCount: PropTypes.number,
    }),
    nextScreen: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    fetchStatus: state.community.fetchStatus,
    item: state.community.item,
})

export default connect(mapStateToProps)(Community)

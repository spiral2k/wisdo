import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Store from '@redux/store'

import * as CommunityActions from '@reducers/community/actions'

import './Step.scss'

const OPTION_TYPES = {
    BEEN_THERE: 'been there',
    THERE_NOW: 'there now',
}

function Step({ values, slug, title }) {
    const value = values[slug]

    const handleClick = selectedValue => {
        const value = selectedValue === values[slug] ? null : selectedValue
        Store.dispatch(CommunityActions.setStepValue({ [slug]: value }))
    }

    // memo for performance
    return useMemo(() => {
        return <div className="step-container">
            <div className="title">{title}</div>

            <div className="options">
                <div
                    className={`option ${values[slug] === OPTION_TYPES.BEEN_THERE ? 'selected' : ''}`}
                    onClick={() => handleClick(OPTION_TYPES.BEEN_THERE)}
                >
                    Been There
                </div>
                <div
                    className={`option ${values[slug] === OPTION_TYPES.THERE_NOW ? 'selected' : ''}`}
                    onClick={() => handleClick(OPTION_TYPES.THERE_NOW)}
                >
                    There Now
                </div>
            </div>
        </div>
        }
    , [values[slug]])
}

Step.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    values: PropTypes.shape({}).isRequired,
}

const mapStateToProps = state => ({
    values: state.community.values,
})

export default connect(mapStateToProps)(Step)

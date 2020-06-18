import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Components */
import Step from '@components/Step/Step'

import './Steps.scss'

function Steps({ steps }) {
    return (
        <div className="steps-container">
            {steps.map(step => (
                <Step key={step.id} {...step} />
            ))}
        </div>
    )
}

Steps.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = state => ({
    steps: state.community.steps,
})

export default connect(mapStateToProps)(Steps)

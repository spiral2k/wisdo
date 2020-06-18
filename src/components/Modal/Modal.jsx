import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Modal.scss'

// Generic modal component that can handle funnel with 1......N screens
const Modal = ({ isVisible, onClose, screens }) => {
    if (!isVisible) return null

    const [activeScreen, setActiveScreen] = useState(0)

    const onNextScreen = () => {
        // check bounds
        if ((activeScreen !== 0 && !activeScreen) || typeof activeScreen !== 'number' || activeScreen === screens.length - 1) {
            return
        }
        setActiveScreen(activeScreen + 1)
    }

    const onPreviousScreen = () => {
        // check bounds
        if (!activeScreen) {
            return
        }

        setActiveScreen(activeScreen - 1)
    }

    const Screen = screens[activeScreen]

    if (!Screen) return null

    return (
        <div className="modal-container fadeIn">
            <div className="modal">
                <div text="Close" className="btn close" onClick={onClose}>
                    X
                </div>
                {activeScreen !== 0 && (
                    <div text="Back" className="btn back" onClick={onPreviousScreen}>
                        {'<'}
                    </div>
                )}
                <div className="screen">
                    <Screen nextScreen={onNextScreen} onClose={onClose} />
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    screens: PropTypes.arrayOf(PropTypes.func),
}

Modal.defaultProps = {
    isVisible: false,
    screens: [],
}

export default Modal

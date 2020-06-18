import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} type="button" className={`button ${className}`}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
}

Button.defaultProps = {
    text: 'whoooo',
    onClick: () => {},
    className: 'purple',
}

export default Button

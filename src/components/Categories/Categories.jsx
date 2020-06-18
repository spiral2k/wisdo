import React from 'react'
import PropTypes from 'prop-types'

/* Components */
import Loader from '@components/Loader/Loader'
import Category from '@components/Category/Category'

import './Categories.scss'

function Categories({ categories, loading, onItemClick }) {
    if (loading) return <Loader show />

    return (
        <div className="categories-container">
            {categories.map(({ categoryName, items }) => (
                <Category key={categoryName} name={categoryName} items={items} onItemClick={onItemClick} />
            ))}
        </div>
    )
}

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    loading: PropTypes.bool.isRequired,
    onItemClick: PropTypes.func.isRequired,
}

export default Categories

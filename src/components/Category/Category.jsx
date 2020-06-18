import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './Category.scss'

function Category({ name, items, onItemClick }) {
    const getMemberscount = membersCount => {
        return Math.abs(membersCount) > 999
            ? `${Math.sign(membersCount) * (Math.abs(membersCount) / 1000).toFixed(1)}k`
            : Math.sign(membersCount) * Math.abs(membersCount)
    }

    // memo for performance
    return useMemo( () => {
        console.log('render com', name)
        return <div className="category-container">
            <div className="label name">{name}</div>

            <div className="label identity">identity</div>

            <div className="items">
                {items.map((item, i) => {
                    if (i > 3) return null // No slider => render only 4
                    return (
                        <div key={item.title} className="item" onClick={() => onItemClick(item)}>
                            <div className="image" style={{ backgroundImage: `url(${item.image}` }} />
                            <div className="title">{item.title}</div>
                            <div className="members">{getMemberscount(item.membersCount)} Members</div>
                        </div>
                    )
                })}
            </div>
        </div>
    }
    , [name])
}

Category.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onItemClick: PropTypes.func.isRequired,
}

export default Category

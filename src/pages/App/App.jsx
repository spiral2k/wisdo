import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Components */
import Modal from '@components/Modal/Modal'
import Categories from '@components/Categories/Categories'
import Menu from '@components/Menu/Menu'
import Community from '@components/Community/Community'
import Joined from '@components/Joined/Joined'

/* Actions */
import * as CommunityActions from '@reducers/community/actions'
import * as HomeActions from '@reducers/home/actions'

/* constants */
import FetchStatus from '@constants/fetchStatus'

import './App.scss'

function App({ dispatch, categories, fetchStatus }) {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        dispatch(HomeActions.getFeed())
    }, [])

    const handleItemClick = item => {
        setShowModal(true)
        setTimeout(() => dispatch(CommunityActions.getItemByID(item)), 500)
    }

    const handleClose = () => {
        dispatch(CommunityActions.reset())
        setShowModal(false)
    }

    return (
        <div className="app-container container">
            <Menu />
            <Modal isVisible={showModal} screens={[Community, Joined]} onClose={handleClose} />
            <Categories
                categories={categories}
                onItemClick={handleItemClick}
                loading={fetchStatus === FetchStatus.FETCHING || fetchStatus === FetchStatus.NULL}
            />
        </div>
    )
}

App.propTypes = {
    fetchStatus: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    fetchStatus: state.home.fetchStatus,
    categories: state.home.categories,
})

export default connect(mapStateToProps)(App)

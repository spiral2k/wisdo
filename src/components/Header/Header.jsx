import React from 'react'
import logo from '@assets/logo.svg'

/* Components */
import Image from '@components/Image/Image'
import Button from '@components/Button/Button'
import './Header.scss'

function Header() {
    return (
        <header className="header-container">
            <div className="container">
                <Image className="logo" src={logo} />

                <div className="explore">Explore</div>

                <div className="buttons">
                    <Button text="Explore communities" className="light" />
                    <Button text="Log in" className="purple-o" />
                    <Button text="Sign up" className="purple" />
                </div>
            </div>
        </header>
    )
}

export default Header

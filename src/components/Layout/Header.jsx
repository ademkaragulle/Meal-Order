import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import './Header.css'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
    return (
        <>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className="main-image">
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </>
    )
}

export default Header
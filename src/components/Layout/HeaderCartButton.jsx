import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './HeaderCartButton.css'
import CartContext from '../../store/cart-context'



function HeaderCartButton(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)

    const { items } = cartCtx

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)


    const btnClasses = `button ${btnIsHighlighted ? 'bump' : ''}`


    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className='icon'>
                <AiOutlineShoppingCart />
            </span>
            <span>Your Cart</span>
            <span className='badge'>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'



export const TipButton = ({ amount, selected, value }) => {

    const { updateButtonSelected } = useContext(GlobalContext);

    const handleClick = () => {
        updateButtonSelected(value)
    }

    return (
        <>
            <button className={selected ? "selectedButton" : "tipButton"} onClick={handleClick}>{amount}</button>

        </>
    )
}

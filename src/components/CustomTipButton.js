import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'



export const CustomTipButton = ({ amount, selected, value }) => {

    const { updateButtonSelected } = useContext(GlobalContext);

    const handleClick = () => {
        updateButtonSelected(value)
    }

    return (
        <>
            <button className={selected ? "selectedButton" : "customTipButton"} onClick={handleClick}>{amount}</button>

        </>
    )
}

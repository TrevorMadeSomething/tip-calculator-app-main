import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ResetButton = () => {

    const { resetAll } = useContext(GlobalContext);

    const handleChange = () => {
        resetAll()
    }


    return (
        <>
            <button className="resetButton" onClick={handleChange}>Reset</button>
        </>
    )
}

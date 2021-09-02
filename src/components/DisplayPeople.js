import { ReactComponent as MySvg } from '../images/icon-person.svg'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const DisplayPeople = () => {
    const [numPeoplee, changeNumPeople] = useState('');
    const { updatePeople } = useContext(GlobalContext);



    const handleChange = () => {
        updatePeople(numPeoplee)
    }



    return (

        <>
            <div className="displayLine">
                <MySvg />
                <input type='text' className="numberDisplay" value={numPeoplee > 0 ? numPeoplee : 'Enter a Valid Num'} onFocus={e => e.target.select()} onInput={(e) => changeNumPeople(e.target.value)} onChange={handleChange} onBlur={handleChange}></input>

            </div>
        </>
    )
}

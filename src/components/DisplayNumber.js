import { ReactComponent as MySvg } from '../images/icon-dollar.svg'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const DisplayNumber = () => {
    const [bill, changeBill] = useState('');
    const { updateBillAmount } = useContext(GlobalContext);

    const handleChange = () => {
        updateBillAmount(bill)
    }


    return (
        <>
            <div className="displayLine">
                <MySvg />
                <input type='text' className="numberDisplay" value={bill > 0 ? bill : 'Enter a Valid Num'} onFocus={e => e.target.select()} onInput={(e) => changeBill(e.target.value)} placeholder='Enter a Valid Num' onChange={handleChange} onBlur={handleChange} />
            </div>
        </>
    )
}

import React, { useContext } from 'react'
import { DisplayNumber } from './DisplayNumber'
import { DisplayPeople } from './DisplayPeople'
import { TipButton } from './TipButton'
import { CustomTipButton } from './CustomTipButton'
import { GlobalContext } from '../context/GlobalState'

export const BillAmount = () => {
    const { buttonSelected } = useContext(GlobalContext);
    return (
        <>
            <div className="billAndAmountSection section">
                <div className="leftDescriptor">Bill</div>
                <DisplayNumber />
            </div>


            <div className="selectTipSection section">
                <div className="leftDescriptor">Select Tip %</div>

                <TipButton amount={"5%"} value={1} selected={buttonSelected === 1 && true} />
                <TipButton amount={"10%"} value={2} selected={buttonSelected === 2 && true} />
                <TipButton amount={"15%"} value={3} selected={buttonSelected === 3 && true} />
                <TipButton amount={"25%"} value={4} selected={buttonSelected === 4 && true} />
                <TipButton amount={"50%"} value={5} selected={buttonSelected === 5 && true} />
                <CustomTipButton amount={"Custom"} value={6} selected={buttonSelected === 6 && true} />

            </div>



            <div className="numberOfPeopleSection section">
                <div className="leftDescriptor">Number of People</div>
                <DisplayPeople />
            </div>
        </>
    )
}

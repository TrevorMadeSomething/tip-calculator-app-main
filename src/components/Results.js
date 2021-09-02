import React, { useContext } from 'react'
import { ResetButton } from './ResetButton'
import { ResultsCard } from './ResultsCard'
import { GlobalContext } from '../context/GlobalState'


export const Results = () => {
    const { buttonSelected, billAmount, numPeople, customAmount } = useContext(GlobalContext);

    const calculateTip = () => {
        switch (buttonSelected) {

            case 1: return 0.05;
            case 2: return 0.1;
            case 3: return 0.15;
            case 4: return 0.25;
            case 5: return 0.50;
            case 6: return (customAmount / 100);

            default: return 5;
        }
    }

    console.log((billAmount * calculateTip()))
    return (
        <>
            <ResultsCard textFill={"Tip Amount"} numberFill={(billAmount * calculateTip())} />

            <ResultsCard textFill={"Total"} numberFill={(billAmount / numPeople) + (billAmount * calculateTip())} />

            <ResetButton />
        </>

    )
}
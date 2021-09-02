import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state

const initialState = {

    billAmount: 0,
    buttonSelected: 1,
    customAmount: 50,
    numPeople: 2

}


// Create context
export const GlobalContext = createContext(initialState)


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function updateButtonSelected(newBtn) {
        dispatch({
            type: 'UPDATE_BUTTON_SELECTED',
            payload: newBtn
        });
    }

    function updateBillAmount(newBillAmount) {
        dispatch({
            type: 'UPDATE_BILL_AMOUNT',
            payload: newBillAmount
        });
    }

    function updatePeople(newPeople) {
        dispatch({
            type: 'UPDATE_PEOPLE',
            payload: newPeople
        });
    }
    function resetAll() {
        dispatch({
            type: 'RESET_ALL'
        });
    }




    return (<GlobalContext.Provider value={{
        billAmount: state.billAmount,
        buttonSelected: state.buttonSelected,
        customAmount: state.customAmount,
        numPeople: state.numPeople,
        updateButtonSelected,
        updateBillAmount,
        updatePeople,
        resetAll
    }}>
        {children}
    </GlobalContext.Provider>);
}
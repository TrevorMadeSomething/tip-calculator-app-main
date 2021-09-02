export const AppReducer = (state, action) => {

    switch (action.type) {

        case 'UPDATE_BUTTON_SELECTED':
            return {
                ...state,
                buttonSelected: action.payload
            }
        case 'UPDATE_BILL_AMOUNT':
            return {
                ...state,
                billAmount: action.payload
            }
        case 'UPDATE_PEOPLE':
            return {
                ...state,
                numPeople: action.payload
            }
        case 'RESET_ALL':
            return {
                billAmount: 0,
                buttonSelected: 1,
                customAmount: 50,
                numPeople: 2
            }


        default:
            return state;
    }
}

export default AppReducer;
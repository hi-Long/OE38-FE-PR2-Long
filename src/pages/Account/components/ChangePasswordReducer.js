import { ACCOUNT_PAGE_RESET_PASSWORD_CURRENT_INPUT, ACCOUNT_PAGE_RESET_PASSWORD_CURRENT_VALIDITY, ACCOUNT_PAGE_RESET_PASSWORD_NEW_INPUT, ACCOUNT_PAGE_RESET_PASSWORD_NEW_VALIDITY, ACCOUNT_PAGE_RESET_PASSWORD_RETYPED_INPUT, ACCOUNT_PAGE_RESET_PASSWORD_RETYPES_VALIDITY } from "../../../../constants";

const initialState = {
    value: '',
    invalid: false
}

export const formInitialState = {
    currentPassword: initialState,
    newPassword: initialState,
    retypedPassword: initialState
}

const inputUpdatedObj = (state, action, prop) => {
    return {
        ...state,
        [prop]: {
            invalid: false,
            value: action.payload
        }
    }
}

const validityUpdatedObj = (state, action, prop) => {
    return {
        ...state,
        [prop]: {
            ...state[prop],
            invalid: action.payload
        }
    }
}

export const formReducer = (state, action) => {
    console.log('Action: ', action)
    switch (action.type) {
        case ACCOUNT_PAGE_RESET_PASSWORD_CURRENT_INPUT:
            return inputUpdatedObj(state, action, 'currentPassword')
        case ACCOUNT_PAGE_RESET_PASSWORD_CURRENT_VALIDITY:
            return validityUpdatedObj(state, action, 'currentPassword')
        case ACCOUNT_PAGE_RESET_PASSWORD_NEW_INPUT:
            return inputUpdatedObj(state, action, 'newPassword')
        case ACCOUNT_PAGE_RESET_PASSWORD_NEW_VALIDITY:
            return validityUpdatedObj(state, action, 'newPassword')
        case ACCOUNT_PAGE_RESET_PASSWORD_RETYPED_INPUT:
            return inputUpdatedObj(state, action, 'retypedPassword')
        case ACCOUNT_PAGE_RESET_PASSWORD_RETYPES_VALIDITY:
            return validityUpdatedObj(state, action, 'retypedPassword')
        default:
            throw new Error("Typo error")
    }
}

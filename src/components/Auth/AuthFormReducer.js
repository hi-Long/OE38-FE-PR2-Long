import { FORM_EMAIL_INPUT, FORM_EMAIL_VALIDITY, FORM_NAME_INPUT, FORM_NAME_VALIDITY, FORM_PASSWORD_INPUT, FORM_PASSWORD_VALIDITY, FORM_PHONE_INPUT, FORM_PHONE_VALIDITY } from "./authConstants";

const inputInitialState = {
    value: '',
    invalid: true
}

export const formInitialState = {
    email: inputInitialState,
    phone: inputInitialState,
    password: inputInitialState,
    name: inputInitialState
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
    switch (action.type) {
        case FORM_EMAIL_INPUT:
            return inputUpdatedObj(state, action, 'email')
        case FORM_EMAIL_VALIDITY:
            return validityUpdatedObj(state, action, 'email')
        case FORM_PHONE_INPUT:
            return inputUpdatedObj(state, action, 'phone')
        case FORM_PHONE_VALIDITY:
            return validityUpdatedObj(state, action, 'phone')
        case FORM_PASSWORD_INPUT:
            return inputUpdatedObj(state, action, 'password')
        case FORM_PASSWORD_VALIDITY:
            return validityUpdatedObj(state, action, 'password')
        case FORM_NAME_INPUT:
            return inputUpdatedObj(state, action, 'name')
        case FORM_NAME_VALIDITY:
            return validityUpdatedObj(state, action, 'name')
        default:
            throw new Error("Typo error")
    }
}

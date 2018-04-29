import {
    USER_AUTHENTICATED,
    USER_UNAUTHENTICATED,
    AUTHENTICATION_ERROR,
    CHECK_IF_AUTHENTICATED,
    USER_REGISTERED, 
    GETTING,
    GOT,
    // ERROR
} from '../actions';

const initialState = {
    users: [],
    authenticated: {},
    notes: [],
    getting: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATED:
            return { ...state, authenticated: true };
        case USER_UNAUTHENTICATED:
            return { ...state, authenticated: false };
        case CHECK_IF_AUTHENTICATED:
            return { ...state } 
        case AUTHENTICATION_ERROR:
            return { ...state, error: action.payload }; 
        case USER_REGISTERED:
            return { ...state, users: action.users}; 
            case GETTING:
            return { ...state, getting: true };
        case GOT:
            return { ...state, notes: action.notes, getting: false, error: null };          
        default:
            return state;   
    }
}







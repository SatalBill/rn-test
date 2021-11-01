import { userConstants } from '../Constants';

const INITIAL_STATE = {
    email: 'naveedkhan252', password: '0346asdff', user: null, error: '',
    loading: false, loggingIn: false, loggedIn: false
};

export function authentication(state = INITIAL_STATE, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                user: null,
                loggedIn: false,
                loggingIn: false
            };
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}
import { userConstants } from '../Constants';
import {navigate} from '../Router/RootNavigation'

export const userActions = {
    login
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        let user = {username, password};
        dispatch(success(user));
        navigate("RepoList",{});
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

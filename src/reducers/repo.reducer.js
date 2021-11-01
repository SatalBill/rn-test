import { repoConstants } from '../Constants';


const INITIAL_STATE = { repoList: [], searchText: '', error: '', loading: false };

export function repo(state = INITIAL_STATE, action) {
    switch (action.type) {
        case repoConstants.REPO_SEARCH_TEXT_CHANGE:
            return {
                ...state,
                searchText: action.searchText
            };
        case repoConstants.REPO_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case repoConstants.REPO_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                repoList: action.repoList
            };
        case repoConstants.REPO_FETCH_FAILURE:
            return {
                ...state,
                error: action.message,
                loading: false
            };
        default:
            return state
    }
}
import { repoConstants } from '../Constants';
import { repoService } from '../Services';
export const repoActions = {
    clearText,
    getReposList
};

function searchTextUpdate(searchText) {
    return { type: repoConstants.REPO_SEARCH_TEXT_CHANGE, searchText };
}


function clearText() {
    return { type: repoConstants.REPO_SEARCH_TEXT_CHANGE, searchText: '' };
}

function getReposList(searchText) {
    return dispatch => {
        dispatch(request());
        dispatch(searchTextUpdate(searchText))
        repoService.getReposList(searchText)
            .then(
                repoList => dispatch(success(repoList)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: repoConstants.REPO_FETCH_REQUEST } }
    function success(repoList) { return { type: repoConstants.REPO_FETCH_SUCCESS, repoList: repoList.items } }
    function failure(error) { return { type: repoConstants.REPO_FETCH_FAILURE, error } }
}

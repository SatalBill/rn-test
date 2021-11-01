export const repoService = {
    getReposList
};


function getReposList(searchText) {
    debugger;
    const requestOptions = {
        method: 'GET',
    };
    console.log(`https://api.github.com/search/repositories?q=${searchText}`);
    return fetch(`https://api.github.com/search/repositories?q=${searchText}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                return Promise.reject('un Authorized call');
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
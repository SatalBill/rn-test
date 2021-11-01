import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { repo } from './repo.reducer';

const rootReducer = combineReducers({
    authentication,
    repo
});

export default rootReducer;
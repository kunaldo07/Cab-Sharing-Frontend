//store contains all the states of website

import {createStore} from 'redux';
import reducers from './reducers/index';

//input = all combine reducers, state, to anable rev tool extention on google
const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
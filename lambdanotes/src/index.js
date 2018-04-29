import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk,logger)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signout" component={SignOut} />
            <Route path="/signup" component={SignUp} />
        </div>
    </Router>
</Provider>
, document.getElementById('root'));


import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import DemoContainer from './containers/DemoContainer/presenter';

const store = configureStore(window.initialState);
const history = syncHistoryWithStore(browserHistory, store);

require('./stylesheets/main.scss');

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={DemoContainer}>
                <IndexRoute component={DemoContainer} />
            </Route>
            <Route path="*" component={DemoContainer}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);

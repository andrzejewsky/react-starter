import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : devTools => devTools;

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk.withExtraArgument({}), router, logger),
    devToolsExtension
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}

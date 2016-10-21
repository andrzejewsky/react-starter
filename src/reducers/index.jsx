import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer} from 'redux-form';
import demos from './demos';

export default combineReducers({
    routing: routerReducer,
    form: formReducer,
    demos,
});

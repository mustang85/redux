import { combineReducers } from 'redux';

// flashMessages - state object
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';

export default combineReducers({
	flashMessages,
	auth
});
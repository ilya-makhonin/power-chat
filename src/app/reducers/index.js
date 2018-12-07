import { combineReducers } from 'redux';
import messagesReducer from './messages';
import peopleReducer from './peoples';


const mainReducer = combineReducers({
	messagesReducer,
	peopleReducer
});

export default mainReducer;

import constants from '../constants/constants';

const messagesReducer = (state = [], action) => {
	switch(action.type) {
		case constants.RECEIVE_NEW_MESSAGE:
			return [
				...state,
				{
					text: action.text,
					author: action.author,
					time: action.time
				}
			];
		default:
			return state
	}
};

export default messagesReducer;

import constants from '../constants/constants';

const peopleReducer = (state = [], action) => {
	switch(action.type) {
		case constants.CONNECTED_NEW_USER:
			return [
				...state,
				{
					id: action.userID,
					userName: action.userName
				}
			];
		case constants.DISCONNECTED_USER:
			return state.filter(user => {
				return user.id !== action.userID
			});
		default:
			return state;
	}
};

export default peopleReducer;

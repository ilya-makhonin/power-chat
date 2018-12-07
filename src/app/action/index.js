import constants from '../constants/constants';


export const connectedNewUser = ({userID, userName}) => {
	return {
		type: constants.CONNECTED_NEW_USER,
		userID,
		userName
	}
};

export const disconnectedUser = (userID) => {
	return {
		type: constants.DISCONNECTED_USER,
		userID,
	}
};

export const receiveNewMessage = ({ text, author, time }) => {
	return {
		type: constants.RECEIVE_NEW_MESSAGE,
		author, text, time
	}
};
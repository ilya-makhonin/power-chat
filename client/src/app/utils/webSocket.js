import { connectedNewUser, disconnectedUser, receiveNewMessage } from '../action/';
import store from '../store/store';

export default ((wsUrl) => {
	let ws = new WebSocket(wsUrl);
	const { dispatch } = store;

	ws.onopen = () => {
		console.log('WS Open!');
	};

	ws.onmessage = (message) => {
		const messageObj = JSON.parse(message.data);

		console.log('ws message: ', messageObj);

		switch (messageObj.type) {
			case 'connected_new_user':
				dispatch(connectedNewUser(messageObj));
				break;
			case 'disconnected_user':
				dispatch(disconnectedUser(messageObj.userID));
				break;
			case 'message':
				dispatch(receiveNewMessage(messageObj.data));
				break;
		}
	};

	let countReconnect = 0;
	const emit = (message) => {
		if (countReconnect > 5) return;
		if (ws.readyState === ws.CONNECTING) {
			setTimeout(() => {
				emit(message);
				countReconnect++
			}, 500);
			return;
		}
		ws.send(message);
		countReconnect = 0
	};

	return { emit };
})('ws://localhost:4000');
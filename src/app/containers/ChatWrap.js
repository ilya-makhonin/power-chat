import React, { Component } from 'react';
import PeopleList from './PeopleList';
import MessagesList from './MessageList';
import authHOC from './authHOC';


class ChatWrap extends Component {
	render() {
		return (
			<div>
				<PeopleList />
				<MessagesList />
			</div>
		);
	}
}

export default authHOC(ChatWrap);

import React, { Component } from 'react'

export default class ChatControl extends Component {
	render() {
		return (
			<div className="chat-message clearfix">
				<textarea placeholder="Type your message" rows="4"/>
				<button>Send</button>
			</div>
		);
	}
}
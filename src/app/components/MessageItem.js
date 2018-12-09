import React, { Component } from 'react'

export default class MessageItem extends Component {
	render() {
		// console.log(this.props);
		return (
			<li className="clearfix">
				<div className="message-data align-right">
					<span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
					<span className="message-data-name">Olia</span>
					<i className="fa fa-circle me"/>
				</div>
				<div className="message other-message float-right">
					Hi Vincent, how are you? How is the project coming along?
				</div>
			</li>
		);
	}
}
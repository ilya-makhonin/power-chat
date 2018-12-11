import React from 'react';


const ChatControl = () => (
	<div className="chat-message clearfix">
		<textarea placeholder="Type your message" rows="4"/>
		<button>Send</button>
	</div>
);

export default ChatControl;


// export default class ChatControl extends Component {
// 	render() {
// 		return (
// 			<div className="chat-message clearfix">
// 				<textarea placeholder="Type your message" rows="4"/>
// 				<button>Send</button>
// 			</div>
// 		);
// 	}
// }
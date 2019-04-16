import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ChatWrap from './app/containers/ChatWrap';
import store from './app/store/store';


export default class App extends Component {
	render() {
		return (
            <Provider key={ module.hot ? Date.now() : store} store={ store }>
              <div className="container clearfix">
                <ChatWrap/>
              </div>
            </Provider>
		);
	}
}

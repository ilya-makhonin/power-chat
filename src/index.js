import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import ws from './app/utils/webSocket';
import './app/styles/styles.scss';

window.ws = ws;
localStorage.removeItem('auth');

const renderApp = Component => {
	render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.querySelector('#root')
	);
};

renderApp(App);


if(module.hot) {
	module.hot.accept('./App.js', () => {
		renderApp(App)
	});
}

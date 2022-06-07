import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducers';
import middleware from './middleware';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

// createStore is deprecated; use import above

const store = createStore(reducer, middleware);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

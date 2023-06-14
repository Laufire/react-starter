import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import updateContext from '@laufire/resist';
import './index.css';
import App from './App';
import context from './core/context';

const Entry = () => {
	const [state, setState] = useState(context.seed);

	useEffect(context.init, []);
	updateContext(context, { state, setState });

	return App(context);
};

ReactDOM.render(<React.StrictMode>
	<Entry/>
</React.StrictMode>,
document.getElementById('root'));

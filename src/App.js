import { React } from 'react';
import './App.scss';
import context from './core/context';
import SimpleButton from './components/simpleButton';

const App = () =>
	<div className="App">
		<div>Count: { context.state.count }</div>
		<div>{ SimpleButton() }</div>
		<div>Refresh ID: { context.state.refreshID }</div>
	</div>;

export default App;

import { React } from 'react';
import './App.scss';
import context from './core/context';

const App = () =>	<div className="App">{ context.config.message }</div>;

export default App;

import { React } from 'react';
import context from '../core/context';

const SimpleButton = () =>
	<button onClick={ context.actions.increaseCount }>Click Me!</button>;

export default SimpleButton;

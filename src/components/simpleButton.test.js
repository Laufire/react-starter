import { render, fireEvent } from '@testing-library/react';

import React from 'react';
import context from '../core/context';
import SimpleButton from './simpleButton';

describe('SimpleButton', () => {
	const { actions, config } = context;

	test('renders the component with appropriate classes', () => {
		const { container: { children }} = render(<SimpleButton/>);
		const [rootElement] = children;

		expect(rootElement).toBeInTheDocument();
	});

	test('when clicked triggers the action, increaseCount', () => {
		jest.spyOn(actions, 'increaseCount').mockReturnValue();

		const { container: { children }} = render(<SimpleButton/>);
		const [rootElement] = children;

		fireEvent.click(rootElement);

		expect(actions.increaseCount).toHaveBeenCalledWith(config.increment);
	});
});

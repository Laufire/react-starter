import { render, screen } from '@testing-library/react';

import App from './App';
import context from './core/context';

describe('App', () => {
	test('renders with a welcome message', () => {
		render(App(context));
		const someText = screen.getByText(context.config.message);

		expect(someText).toBeInTheDocument();
	});
});

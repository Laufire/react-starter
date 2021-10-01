import { render, screen } from '@testing-library/react';

// NOTE: automock from jest config doesn't work on apps created with create-react-app.
jest.mock('./components/simpleButton');

import App from './App';

describe('App', () => {
	const context = {
		state: {
			count: 0,
			refreshID: 'ABCD',
		},
	};

	test('the component renders properly', () => {
		const component = render(App(context)).getByRole('App');
		const someText = screen.getByText(/count/i);

		expect(component).toBeInTheDocument();
		expect(someText).toBeInTheDocument();
	});
});

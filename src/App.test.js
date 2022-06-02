import { render, screen } from '@testing-library/react';

import App from './App';

// NOTE: automock from jest config doesn't work on apps created with create-react-app.
jest.mock('./components/simpleButton');

describe('App', () => {
	const context = {
		state: {
			count: 0,
			refreshID: 'ABCD',
		},
	};

	test('the component renders properly', () => {
		const component = render(App(context)).getByRole('application');
		const someText = screen.getByText(/count/i);

		expect(component).toBeInTheDocument();
		expect(someText).toBeInTheDocument();
	});
});

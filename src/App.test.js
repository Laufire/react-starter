import { React } from 'react';
import { render, screen } from '@testing-library/react';

// NOTE: automock from jest config doesn't work on apps created with create-react-app.
jest.mock('./components/simpleButton');
jest.mock('./core/context', () => ({
	state: {
		count: 0,
		refreshID: 'ABCD',
	},
}));

import App from './App';

describe('App', () => {
	test('the component renders properly', () => {
		render(<App/>);
		const someText = screen.getByText(/count/i);

		expect(someText).toBeInTheDocument();
	});
});

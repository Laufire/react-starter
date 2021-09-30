jest.mock('./core/context', () => ({ config: { message: 'message' }}));

import { React } from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
	render(<App/>);
	const someText = screen.getByText('message');

	expect(someText).toBeInTheDocument();
});

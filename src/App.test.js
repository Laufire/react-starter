import { render } from '@testing-library/react';

import App from './App';
import context from './core/context';

describe('App', () => {
	test('renders the component appropriately', () => {
		const component = render(App(context)).getByRole('App');

		expect(component).toBeInTheDocument();
	});
});

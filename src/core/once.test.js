import React from 'react';
import { render } from '@testing-library/react';
import once from './once';

test('once excutes cb once', () => {
	jest.spyOn(React, 'useEffect');
	const cb = jest.fn();

	const Anvil = () => {
		once(cb);

		return null;
	};

	render(<Anvil/>);

	expect(React.useEffect).toHaveBeenCalledWith(cb, []);
});

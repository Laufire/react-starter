import { rndBetween } from '@laufire/utils/random';
import actions from './actions';

test('increaseCount, increases count with given data.', () => {
	const { increaseCount } = actions;

	const count = rndBetween();
	const data = rndBetween();
	const context = {
		state: { count },
		data: data,
	};

	const result = increaseCount(context);

	expect(result).toMatchObject({ count: data + count });
});

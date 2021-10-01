import SampleService from '../services/sample';
import init from './init';

describe('init', () => {
	test('Sample service says hi', () => {
		jest.spyOn(SampleService, 'sayHi').mockReturnValue();

		init();

		expect(SampleService.sayHi).toHaveBeenLastCalledWith();
	});
});

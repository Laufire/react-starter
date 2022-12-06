import SampleService from './sample';

test('sayHi', () => {
	jest.spyOn(console, 'log').mockImplementation(() => {});

	const { sayHi } = SampleService;

	sayHi();

	// eslint-disable-next-line no-console
	expect(console.log).toHaveBeenCalledWith('Hi!');
});

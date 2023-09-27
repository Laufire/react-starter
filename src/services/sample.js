import { peek } from '@laufire/utils/debug';

const sampleService = () => ({ sayHi: () => peek('Hi!') });

const SampleService = sampleService();

export default SampleService;

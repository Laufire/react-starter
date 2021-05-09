const increaseCount = ({ state }) => ({
	count: state.count + 1,
});

const actions = {
	increaseCount,
};

export default actions;

const increaseCount = ({ state }, increment) => ({
	count: state.count + increment,
});

const actions = {
	increaseCount,
};

export default actions;

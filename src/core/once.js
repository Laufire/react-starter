import { useEffect } from 'react';

// eslint-disable-next-line react-hooks/exhaustive-deps
const Once = (cb) => useEffect(cb, []);

export default Once;

import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	setData: [ 'data' ]
});

export const SeriesTypes = Types;
export default Creators;

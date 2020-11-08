import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	setData: [ 'data' ],
	setTypes: [ 'serie', 'data' ],
	setLoading: [ 'loading' ],
	setSearchData: [ 'searchData' ]
});

export const SeriesTypes = Types;
export default Creators;

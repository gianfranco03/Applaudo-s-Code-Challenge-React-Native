import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	setData: [ 'data' ],
	setTypes: [ 'serie', 'data' ],
	setLoading: [ 'loading' ],
	setLoadingSearch: [ 'loading' ],
	setSearchData: [ 'searchData' ],
	handleFavorites: [ 'id', 'data' ]
});

export const SeriesTypes = Types;
export default Creators;

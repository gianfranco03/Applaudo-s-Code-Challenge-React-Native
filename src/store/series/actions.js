import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	setData: [ 'data' ],
	setTypes: [ 'serie', 'data' ],
	setLoading: [ 'loading' ],
	setLoadingSearch: [ 'loadingSearch' ],
	setSearchData: [ 'searchData' ],
	handleFavorites: [ 'data' ]
});

export const SeriesTypes = Types;
export default Creators;

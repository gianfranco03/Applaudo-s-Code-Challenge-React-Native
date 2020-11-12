import { INITIAL_STATE } from './initialState';
import { createReducer } from 'reduxsauce';
import { SeriesTypes } from './actions';

// set home info
export const setData = (state, { data }) => {
	return {
		...state,
		data
	};
};

// set loading seires
export const setLoading = (state, { loading }) => ({
	...state,
	loading
});

// set loading search
export const setLoadingSearch = (state, { loadingSearch }) => ({
	...state,
	loadingSearch
});

// set data type: [anime, manga]
export const setTypes = (state, { serie, data }) => {
	return {
		...state,
		data: {
			...state.data,
			[serie]: data
		}
	};
};

// search series by name
export const setSearchData = (state, { searchData }) => ({
	...state,
	searchData
});

// add or remove serie to favorites
export const handleFavorites = (state, { data }) => {
	const { serieId } = data;
	let favoritesAux = state.favorites;

	// search existing serie
	const favoriteIndex = favoritesAux.findIndex((item) => item.serieId === serieId);

	// remove from favorites
	if (favoriteIndex >= 0) {
		console.log('remove ', serieId);
		favoritesAux = favoritesAux.filter((item) => item.serieId !== serieId);
	}
	else {
		// add to favorites
		console.log('push ', serieId);
		favoritesAux.push(data);
	}

	return {
		...state,
		favorites: [ ...favoritesAux ]
	};
};

export const series = createReducer(INITIAL_STATE, {
	[SeriesTypes.SET_DATA]: setData,
	[SeriesTypes.SET_TYPES]: setTypes,
	[SeriesTypes.SET_LOADING]: setLoading,
	[SeriesTypes.SET_SEARCH_DATA]: setSearchData,
	[SeriesTypes.HANDLE_FAVORITES]: handleFavorites,
	[SeriesTypes.SET_LOADING_SEARCH]: setLoadingSearch
});

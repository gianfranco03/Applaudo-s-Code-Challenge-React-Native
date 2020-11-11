import { INITIAL_STATE } from './initialState';
import { createReducer } from 'reduxsauce';
import { SeriesTypes } from './actions';

export const setData = (state, { data }) => {
	return {
		...state,
		data
	};
};

export const setLoading = (state, { loading }) => ({
	...state,
	loading
});

export const setLoadingSearch = (state, { loadingSearch }) => ({
	...state,
	loadingSearch
});

export const setTypes = (state, { serie, data }) => {
	return {
		...state,
		data: {
			...state.data,
			[serie]: data
		}
	};
};

export const setSearchData = (state, { searchData }) => ({
	...state,
	searchData
});

export const handleFavorites = (state, { id, data }) => {
	let favoritesAux = state.favorites;

	const favoriteIndex = favoritesAux.findIndex((item) => item.id === id && item.type === data.type);

	if (favoriteIndex >= 0) {
		console.log('remove ', id);
		favoritesAux = favoritesAux.filter((item) => item.id !== id && item.type === data.type);
	}
	else {
		console.log('push ', id);
		favoritesAux.push(data);
	}

	console.log('DATA', favoritesAux.map((item) => `${item.id}-${item.type}`));

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

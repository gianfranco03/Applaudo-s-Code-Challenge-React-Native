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

export const series = createReducer(INITIAL_STATE, {
	[SeriesTypes.SET_DATA]: setData,
	[SeriesTypes.SET_TYPES]: setTypes,
	[SeriesTypes.SET_LOADING]: setLoading,
	[SeriesTypes.SET_SEARCH_DATA]: setSearchData
});

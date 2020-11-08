import { INITIAL_STATE } from './initialState';
import { createReducer } from 'reduxsauce';
import { SeriesTypes } from './actions';

export const setData = (state, { data }) => {
	return {
		...state,
		data
	};
};

export const series = createReducer(INITIAL_STATE, {
	[SeriesTypes.SET_DATA]: setData
});

import { INITIAL_STATE } from './initialState';
import { createReducer } from 'reduxsauce';
import { FlowTypes } from './actions';

// state to know if the app is connected to internet
export const setConnected = (state, { connected }) => {
	return {
		...state,
		connected
	};
};

export const appFlow = createReducer(INITIAL_STATE, {
	[FlowTypes.SET_CONNECTED]: setConnected
});

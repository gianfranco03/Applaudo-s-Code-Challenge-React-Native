import { combineReducers } from 'redux';
import configureStore from './createStore';

import { series } from './series/reducer';

export default () => {
	const rootReducer = combineReducers({
		/**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
		series: series
	});

	return configureStore(rootReducer);
};

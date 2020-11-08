import axios from 'axios';

import { BASE_API } from 'constants/api';
import SeriesActions from 'store/series/actions';
import { store } from '../../App';

import showToast from 'utils/toast';

export const getSeriesByType = (type = 'anime') => {
	store.dispatch(SeriesActions.setLoading(true));

	axios
		.get(`${BASE_API}/${type}`)
		.then((response) => {
			store.dispatch(SeriesActions.setTypes(`${type}`, response.data));
			store.dispatch(SeriesActions.setLoading(false));
		})
		.catch((error) => {
			showToast({ text: error.toString(), type: 'error' });
			store.dispatch(SeriesActions.setLoading(false));
		});
};

export const searchSeries = (type = 'anime', slug) => {
	store.dispatch(SeriesActions.setLoading(true));

	axios
		.get(`${BASE_API}/${type}?filter[text]=${slug}`)
		.then((response) => {
			store.dispatch(SeriesActions.setSearchData(response.data));
			store.dispatch(SeriesActions.setLoading(false));
		})
		.catch((error) => {
			showToast({ text: error.toString(), type: 'error' });
			store.dispatch(SeriesActions.setLoading(false));
		});
};

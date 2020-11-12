import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Header from './header';
import Body from './body';
import Episodes from './episodes';
import SerieDetailSkeleton from './skeleton';

import showToast from 'utils/toast';

import SeriesActions from 'store/series/actions';

import styles from './styles';

const SerieDetailsScreen = (props) => {
	// props
	const { navigation, route: { params: { data } } } = props;
	const dispatch = useDispatch();
	// state
	const [ genres, setGenres ] = useState([]);
	const [ episodesList, setEpisodes ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ favorite, setFavorite ] = useState(false);
	let dataType = null;
	// reducers
	const { connected } = useSelector((state) => state.appFlow);
	const favoritesList = useSelector((state) => state.series.favorites);

	useEffect(() => {
		// serie type
		dataType = getDataType();

		// get genres and episodes if there is internet available
		if (connected) {
			getGenres();
			getEpisodes();
		}
		else {
			setLoading(false);
		}

		// check if is favorite
		const isFavorite = checkFavorite();
		if (isFavorite) {
			setFavorite(true);
		}
	}, []);

	useEffect(
		() => {
			// toogle favorite
			const isFavorite = checkFavorite();
			if (isFavorite) {
				setFavorite(true);
			}
			else {
				setFavorite(false);
			}
		},
		[ favoritesList ]
	);

	// check if exist in favorites list
	const checkFavorite = () => {
		const isFavorite = favoritesList.findIndex((item) => item.serieId == `${data.id}-${data.type}`);

		return isFavorite >= 0 ? true : false;
	};

	const getDataType = () => {
		switch (data.type) {
			case 'manga': {
				return 'chapters';
			}
			case 'anime': {
				return 'episodes';
			}
			default: {
				return null;
			}
		}
	};

	// get serie genres
	const getGenres = () => {
		if (data.relationships.genres && data.relationships.genres.links.related) {
			setLoading(true);
			axios
				.get(data.relationships.genres.links.related)
				.then((res) => {
					setLoading(false);
					setGenres(res.data.data);
				})
				.catch((err) => {
					setLoading(false);
					showToast({ text: err.toString(), type: 'error' });
				});
		}
	};

	// get serie episodes
	const getEpisodes = () => {
		if (dataType && data.relationships && data.relationships[dataType].links.related) {
			setLoading(true);
			axios
				.get(data.relationships[dataType].links.related)
				.then((res) => {
					setLoading(false);
					setEpisodes(res.data.data);
				})
				.catch((err) => {
					setLoading(false);
					showToast({ text: err.toString(), type: 'error' });
				});
		}
	};

	const onPressFavorite = () => {
		// dispatch serie info, adding genres, episodes and custom id
		dispatch(
			SeriesActions.handleFavorites({
				...data,
				genres,
				serieId: `${data.id}-${data.type}`
				// episodes: episodesList
			})
		);
	};

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scroll}>
				{!loading ? (
					<View>
						<Header data={{ ...data, favorite }} onPressFavorite={onPressFavorite} />
						<Body data={data} genres={genres} />
						<Episodes data={data} episodes={episodesList} />
					</View>
				) : (
					<SerieDetailSkeleton />
				)}
			</ScrollView>
		</View>
	);
};

export default SerieDetailsScreen;

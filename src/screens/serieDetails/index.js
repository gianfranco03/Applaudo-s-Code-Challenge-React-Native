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
	const { navigation, route: { params: { data } } } = props;
	const dispatch = useDispatch();

	const favoritesList = useSelector((state) => state.series.favorites);

	const [ genres, setGenres ] = useState([]);
	const [ episodesList, setEpisodes ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ favorite, setFavorite ] = useState(false);
	let dataType = null;

	useEffect(() => {
		dataType = getDataType();
		getGenres();
		getEpisodes();

		const isFavorite = checkFavorite();
		if (isFavorite) {
			setFavorite(true);
		}
	}, []);

	useEffect(
		() => {
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
		dispatch(SeriesActions.handleFavorites({ ...data, genres, serieId: `${data.id}-${data.type}` }));
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

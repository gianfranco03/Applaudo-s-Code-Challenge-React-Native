import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import axios from 'axios';

import Header from './header';
import Body from './body';
import Episodes from './episodes';
import SerieDetailSkeleton from './skeleton';

import showToast from 'utils/toast';

import styles from './styles';

const SerieDetailsScreen = (props) => {
	const { navigation, route: { params: { data } } } = props;

	const [ genres, setGenres ] = useState([]);
	const [ episodesList, setEpisodes ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	let dataType = null;

	useEffect(() => {
		dataType = getDataType();
		getGenres();
		getEpisodes();
	}, []);

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

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scroll}>
				{!loading ? (
					<View>
						<Header data={data} />
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

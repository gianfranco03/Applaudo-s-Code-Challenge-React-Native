import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Searchbar } from 'react-native-paper';
import { Icon } from 'native-base';

import HomeSkeleton from './skeleton';
import ListItem from 'components/serieCard';
import ListItemSkeleton from 'components/skeleton/listItem';
import showToast from 'utils/toast';

import SeriesActions from 'store/series/actions';
import { getSeriesByType } from 'actions/series.js';
import styles from './styles';

const SERIES_MAP = {
	ANIME: 'anime',
	MANGA: 'manga'
};

const HomeScreen = (props) => {
	// props
	const { navigation } = props;
	// actions and reducers
	const dispatch = useDispatch();
	const { loading: loadingState, data: { anime, manga } } = useSelector((state) => state.series);
	const { connected } = useSelector((state) => state.appFlow);
	// states
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ searchQuery, onChangeSearch ] = useState('');

	useEffect(() => {
		// get series
		if (connected) {
			getData();
		}
		else {
			setLoading(false);
			setData([
				{ title: 'Anime', horizontal: true, data: anime.data },
				{ title: 'Manga', horizontal: true, data: manga.data }
			]);
		}
	}, []);

	// get anime and manga
	const getData = () => {
		// empty states and reducers
		dispatch(SeriesActions.setData({ anime: [], manga: [] }));
		setData([]);

		getSeriesByType(SERIES_MAP.ANIME);
		getSeriesByType(SERIES_MAP.MANGA);
	};

	// check new anime info
	useEffect(
		() => {
			if (connected && anime.data && anime.data.length > 0) {
				const dataAux = [ ...data ];

				const item = { title: 'Anime', horizontal: true, data: anime.data };

				dataAux.push(item);

				setData([ ...dataAux ]);
			}
		},
		[ anime ]
	);

	// check new manga info
	useEffect(
		() => {
			if (connected && manga.data && manga.data.length > 0) {
				console.log('adding manga');
				const dataAux = [ ...data ];

				const item = { title: 'Manga', horizontal: true, data: manga.data };

				dataAux.push(item);
				setData([ ...dataAux ]);
			}
		},
		[ manga ]
	);

	// set loading state
	useEffect(
		() => {
			if (loadingState) {
				console.log('data removed');
				setData([]);
			}

			setLoading(loadingState);
		},
		[ loadingState ]
	);

	const renderEmpyComponent = () => {
		if (loading) return null;

		if (connected) {
			return <Text style={styles.noItems}>There's no information to show</Text>;
		}

		return (
			<View style={styles.noInternetContainer}>
				<Image source={require('assets/icons/no-wifi.png')} style={styles.wifiImage} />
				<Text style={styles.noInternetText}>No Internet connection</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.titleText}>H O M E</Text>
			</View>
			<View style={styles.searchBarContainer}>
				<Searchbar
					style={styles.searchBar}
					inputStyle={styles.inputStyle}
					placeholder="Search"
					onChangeText={onChangeSearch}
					value={searchQuery}
				/>
				<TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('SearchScreen')} />
			</View>
			<View style={styles.divider} />
			<TouchableOpacity style={styles.favoritesContainer} onPress={() => navigation.navigate('FavoritesScreen')}>
				<Image source={require('assets/icons/romantic.png')} style={styles.favoriteIcon} />
				<Text style={styles.favoritesText}>My Favorites</Text>
			</TouchableOpacity>
			{!loading ? (
				<SectionList
					contentContainerStyle={styles.contentContainer}
					stickySectionHeadersEnabled={false}
					sections={data}
					ListEmptyComponent={() => renderEmpyComponent()}
					renderSectionHeader={({ section }) => (
						<View>
							<Text style={styles.sectionHeader}>{section.title}</Text>
							{section.horizontal ? (
								<FlatList
									horizontal
									data={section.data}
									renderItem={({ item }) =>
										loading ? (
											<ListItemSkeleton />
										) : (
											<ListItem
												item={item}
												onPress={() =>
													navigation.navigate('SerieDetailsScreen', { data: item })}
											/>
										)}
									ItemSeparatorComponent={() => <View style={styles.separator} />}
									showsHorizontalScrollIndicator={false}
								/>
							) : null}
						</View>
					)}
					renderItem={({ item, section }) => {
						if (section.horizontal) {
							return null;
						}
						return <ListItem item={item} onPress={() => navigation.navigate('SerieDetailsScreen')} />;
					}}
				/>
			) : (
				<HomeSkeleton />
			)}
		</View>
	);
};

export default HomeScreen;

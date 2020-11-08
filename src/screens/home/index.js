import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Searchbar } from 'react-native-paper';

import ListItem from 'components/serieCard';
import ListItemSkeleton from 'components/skeleton/listItem';
import showToast from 'utils/toast';

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
	const seriesState = useSelector((state) => state.series);
	const { anime, manga } = seriesState.data;
	const { loading: loadingState } = seriesState;
	// states
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(loadingState);
	const [ searchQuery, onChangeSearch ] = useState('');

	useEffect(() => {
		getSeriesByType(SERIES_MAP.ANIME);
		getSeriesByType(SERIES_MAP.MANGA);
	}, []);

	useState(
		() => {
			const dataAux = data;

			if (anime.data && anime.data.length > 0) {
				const item = { title: 'Anime', horizontal: true, data: anime.data };

				dataAux.push(item);
			}
			if (manga.data) {
				const item = { title: 'Manga', horizontal: true, data: manga.data };

				dataAux.push(item);
			}

			setData([ ...dataAux ]);
		},
		[ anime, manga ]
	);

	useEffect(
		() => {
			setLoading(loadingState);
		},
		[ loadingState ]
	);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
				<TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('SearchScreen')} />
			</View>
			<SectionList
				contentContainerStyle={styles.contentContainer}
				stickySectionHeadersEnabled={false}
				sections={data}
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
											onPress={() => navigation.navigate('SerieDetailsScreen', { data: item })}
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
		</View>
	);
};

export default HomeScreen;

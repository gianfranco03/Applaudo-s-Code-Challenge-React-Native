import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Searchbar, RadioButton } from 'react-native-paper';

import ListItem from 'components/serieCard';

import { searchSeries } from 'actions/series.js';
import SeriesActions from 'store/series/actions';

import colors from 'constants/colors';
import styles from './styles';

const TYPES = {
	ANIME: 'anime',
	MANGA: 'manga'
};

const SearchScreen = (props) => {
	// props
	const { navigation } = props;
	// actions & reducers
	const dispatch = useDispatch();
	const seriesState = useSelector((state) => state.series);
	const { loading: loadingState, searchData } = seriesState;
	// states
	const [ searchQuery, onChangeSearch ] = useState('');
	const [ checked, setChecked ] = useState(TYPES.ANIME);
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(loadingState);

	useEffect(() => {
		// clean last search
		dispatch(SeriesActions.setSearchData({ data: [] }));
	}, []);

	useEffect(
		() => {
			setData([ ...searchData.data ]);
		},
		[ searchData ]
	);

	useEffect(
		() => {
			if (loadingState) {
				setData([]);
			}

			setLoading(loadingState);
		},
		[ loadingState ]
	);

	const _searchSeries = (slug) => {
		if (slug.length > 0) {
			searchSeries(slug, searchQuery);
		}
	};

	const handleTypes = (type) => {
		if (checked !== type) {
			setChecked(type);
			_searchSeries(type);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Searchbar
					placeholder="Search"
					onChangeText={onChangeSearch}
					value={searchQuery}
					autoFocus
					onSubmitEditing={() => _searchSeries(searchQuery)}
				/>
			</View>
			<View style={styles.options}>
				<View style={styles.optionContent}>
					<RadioButton
						value={TYPES.ANIME}
						color={colors.white}
						uncheckedColor={colors.white}
						status={checked === TYPES.ANIME ? 'checked' : 'unchecked'}
						onPress={() => handleTypes(TYPES.ANIME)}
					/>
					<Text style={styles.optionText} onPress={() => handleTypes(TYPES.ANIME)}>
						Anime
					</Text>
				</View>
				<View style={styles.optionContent}>
					<RadioButton
						value={TYPES.MANGA}
						color={colors.white}
						uncheckedColor={colors.white}
						status={checked === TYPES.MANGA ? 'checked' : 'unchecked'}
						onPress={() => handleTypes(TYPES.MANGA)}
					/>
					<Text style={styles.optionText} onPress={() => handleTypes(TYPES.MANGA)}>
						Manga
					</Text>
				</View>
			</View>
			{loading ? (
				<View style={styles.loading}>
					<ActivityIndicator size="large" color={colors.white} />
				</View>
			) : null}
			<FlatList
				numColumns={3}
				contentContainerStyle={styles.contentContainer}
				data={data}
				renderItem={({ item }) => (
					<View style={styles.itemMargin}>
						<ListItem
							item={item}
							onPress={() => navigation.navigate('SerieDetailsScreen', { data: item })}
						/>
					</View>
				)}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
			/>
		</View>
	);
};

export default SearchScreen;

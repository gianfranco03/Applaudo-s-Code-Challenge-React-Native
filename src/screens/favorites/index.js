import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'native-base';

import SeriesActions from 'store/series/actions';

import { EMPTY_RESPONSE } from 'constants/messages';

import styles from './styles';

const FavoritesScreen = (props) => {
	const { navigation } = props;
	const dispatch = useDispatch();
	const { favorites } = useSelector((state) => state.series);
	const { connected } = useSelector((state) => state.appFlow);

	const [ data, setData ] = useState(favorites);

	useEffect(
		() => {
			setData([ ...favorites ]);
		},
		[ favorites ]
	);

	const renderItem = ({ item, index }) => {
		console.log('item', item.attributes.posterImage);
		if (!item) return null;

		const attributes = item.attributes;
		let genresText = '';

		if (item.genres.length > 0) {
			item.genres.map((element, index) => {
				genresText = `${genresText}${element.attributes.name}, `;
			});
		}

		return (
			<View style={styles.itemContainer}>
				<Image
					source={{
						uri: attributes.posterImage.medium || attributes.posterImage.original
					}}
					style={styles.itemImage}
					resizeMode="cover"
				/>
				<View style={styles.itemAbout}>
					<Text style={styles.textTitle}>{attributes.canonicalTitle}</Text>
					<Text style={styles.textTitle}>
						Type <Text style={styles.textSubTitle}>{item.type} </Text>
					</Text>
					<Text style={styles.textTitle}>
						{attributes.chapterCount ? 'Chapters' : 'Episodes'} <Text style={styles.textSubTitle} />
						{attributes.chapterCount ? attributes.chapterCount ? (
							attributes.chapterCount
						) : (
							EMPTY_RESPONSE
						) : attributes.episodeCount ? (
							attributes.episodeCount
						) : (
							EMPTY_RESPONSE
						)}
					</Text>
					<Text style={styles.textTitle}>
						Genres{' '}
						<Text style={styles.textSubTitle}>
							{genresText.length > 0 ? genresText.substring(0, genresText.length - 2) : EMPTY_RESPONSE}
						</Text>
					</Text>
				</View>
				<Icon
					style={styles.removeIcon}
					type="FontAwesome"
					name="remove"
					onPress={() =>
						dispatch(SeriesActions.handleFavorites({ ...item, serieId: `${item.id}-${item.type}` }))}
				/>
			</View>
		);
	};

	const renderEmpyComponent = () => {
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
				<Icon
					style={styles.backIcon}
					type="FontAwesome"
					name="angle-left"
					onPress={() => navigation.goBack()}
				/>
				<Text style={styles.title}>{`M Y   F A V O R I T E S`}</Text>
			</View>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item, index) => `${item.id}-${item.type}`}
				ListEmptyComponent={() => renderEmpyComponent()}
				contentContainerStyle={styles.containerStyle}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
			/>
		</View>
	);
};

export default FavoritesScreen;

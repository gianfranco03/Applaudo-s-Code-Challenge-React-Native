import React from 'react';
import { View, Linking, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import showToast from 'utils/toast';

import { EMPTY_RESPONSE } from 'constants/messages';
import { BASE_YOUTUBE } from 'constants/api';

import styles from './styles';

const Body = (props) => {
	const { data, genres } = props;
	const attributes = data.attributes;
	let genresText = '';

	if (genres.length > 0) {
		genres.map((item, index) => {
			genresText = `${genresText}${item.attributes.name}, `;
		});
	}

	const openYoutube = () => {
		const url = `${BASE_YOUTUBE}/${attributes.youtubeVideoId}`;
		Linking.canOpenURL(url)
			.then((supported) => {
				if (!supported) {
					showToast({ text: "Can't handle url: " + url });
					return;
				}
				else {
					return Linking.openURL(url);
				}
			})
			.catch((err) => showToast({ text: 'An error occurred', type: 'error' }));
	};

	return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>Genres</Text>
			<Text style={styles.textSubTitle}>
				{genresText.length > 0 ? genresText.substring(0, genresText.length - 2) : EMPTY_RESPONSE}
			</Text>
			<View style={styles.about}>
				<View style={styles.box}>
					<Text style={styles.textTitle}>Average Rainting</Text>
					<Text style={styles.textSubTitle}>
						{attributes.averageRating ? attributes.averageRating : EMPTY_RESPONSE}
					</Text>
					<Text style={styles.textTitle}>Age Rainting</Text>
					<Text style={styles.textSubTitle}>
						{attributes.ageRating ? attributes.ageRating : EMPTY_RESPONSE}
					</Text>
				</View>
				<View style={styles.box}>
					<Text style={styles.textTitle}>Episode Duration</Text>
					<Text style={styles.textSubTitle}>
						{attributes.episodeLength ? attributes.episodeLength : EMPTY_RESPONSE}
					</Text>
					<Text style={styles.textTitle}>Airing Status</Text>
					<Text style={styles.textSubTitle}>{attributes.status ? attributes.status : EMPTY_RESPONSE}</Text>
				</View>
			</View>
			<Text style={styles.textTitle}>Synopsis</Text>
			<Text style={styles.synopsisText}>{attributes.synopsis ? attributes.synopsis : EMPTY_RESPONSE}</Text>
			{attributes.youtubeVideoId ? (
				<TouchableOpacity style={styles.youtubeContainer} onPress={() => openYoutube()}>
					<Text style={styles.youtubeText}>Youtube</Text>
					<Icon style={styles.youtubeIcon} type="FontAwesome" name="youtube-play" />
				</TouchableOpacity>
			) : null}
		</View>
	);
};

export default Body;

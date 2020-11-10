import React from 'react';
import { View, Image, Text } from 'react-native';

import { EMPTY_RESPONSE } from 'constants/messages';

import styles from './styles';

const Header = (props) => {
	const { data } = props;
	const attributes = data.attributes;

	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: attributes.posterImage.medium || attributes.posterImage.original
				}}
				style={styles.image}
				resizeMode="cover"
			/>
			<View style={styles.about}>
				<Text style={styles.textTitle}>Canonical Title</Text>
				<Text style={styles.textSubTitle}>{attributes.canonicalTitle}</Text>
				<Text style={styles.textTitle}>Type</Text>
				<Text style={styles.textSubTitle}>{data.type} </Text>
				<Text style={styles.textTitle}>{attributes.chapterCount ? 'Chapters' : 'Episodes'}</Text>
				<Text style={styles.textSubTitle}>
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
				<Text style={styles.textTitle}>Year</Text>
				<Text style={styles.textSubTitle}>
					{attributes.startDate ? new Date(attributes.startDate).getFullYear() : EMPTY_RESPONSE}
				</Text>
				<Text style={styles.textTitle}>Start Date till End Date</Text>
				<Text style={styles.textSubTitle}>
					{attributes.startDate ? attributes.startDate : EMPTY_RESPONSE}
					{attributes.endDate ? ` till ${attributes.endDate}` : ' till ---'}
				</Text>
			</View>
		</View>
	);
};

export default Header;

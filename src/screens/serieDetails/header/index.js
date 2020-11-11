import React from 'react';
import { View, Image, Text, Share } from 'react-native';
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import showToast from 'utils/toast';

import { EMPTY_RESPONSE } from 'constants/messages';

import styles from './styles';

const Header = (props) => {
	const { data, onPressFavorite } = props;
	const attributes = data.attributes;

	const navigation = useNavigation();

	const onShare = async () => {
		try {
			const result = await Share.share({
				title: `Share ${data.type}`,
				message: `Hey! check this ${data.type}: ${attributes.canonicalTitle}`
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				}
				else {
					// shared
				}
			}
			else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			showToast({ text: error.message, type: 'error' });
		}
	};

	return (
		<View>
			<View style={styles.headerIcons}>
				<Icon
					style={styles.backIcon}
					type="FontAwesome"
					name="angle-left"
					onPress={() => navigation.goBack()}
				/>
				<View style={styles.rightIcons}>
					<Icon
						style={styles.saveIcon}
						type="FontAwesome"
						name={data.favorite ? 'bookmark' : 'bookmark-o'}
						onPress={() => onPressFavorite()}
					/>
					<Icon style={styles.shareIcon} type="FontAwesome" name="share-alt" onPress={() => onShare()} />
				</View>
			</View>
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
		</View>
	);
};

export default Header;

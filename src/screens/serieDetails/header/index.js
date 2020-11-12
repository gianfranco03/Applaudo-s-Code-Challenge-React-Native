import React from 'react';
import { View, Image, Text, Share, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import showToast from 'utils/toast';

import { EMPTY_RESPONSE } from 'constants/messages';

import styles from './styles';

const Header = (props) => {
	// props
	const { data, onPressFavorite } = props;
	const attributes = data.attributes;

	// reducers and dispatchers
	const navigation = useNavigation();

	// share serie name
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
					<TouchableOpacity onPress={() => onPressFavorite()}>
						{data.favorite ? (
							<Image source={require('assets/icons/heart-filled.png')} style={styles.heartImage} />
						) : (
							<Image source={require('assets/icons/heart-empty.png')} style={styles.heartImage} />
						)}
					</TouchableOpacity>
					<TouchableOpacity onPress={() => onShare()}>
						<Image
							source={require('assets/icons/sharing.png')}
							style={styles.shareImage}
							onPress={() => onShare()}
						/>
					</TouchableOpacity>
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

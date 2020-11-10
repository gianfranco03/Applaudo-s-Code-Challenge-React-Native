import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { Icon } from 'native-base';

import styles from './styles';

const Episodes = (props) => {
	const { data, episodes } = props;

	const renderItem = ({ item, index }) => {
		const attributes = item.attributes;

		if (!attributes) {
			return null;
		}

		const synopsis = attributes.synopsis;

		return (
			<View style={styles.itemContainer}>
				{attributes.thumbnail ? (
					<Image
						source={{
							uri: attributes.thumbnail.original
						}}
						style={styles.image}
						resizeMode="cover"
					/>
				) : (
					<View style={styles.iconContainer}>
						<Icon type="FontAwesome" name="ban" style={styles.banIcon} />
					</View>
				)}
				<View style={styles.itemAbout}>
					<Text style={styles.itemTitleText}>
						#{attributes.number}{' '}
						{attributes.canonicalTitle ? attributes.canonicalTitle.length > 25 ? (
							`${attributes.canonicalTitle.substring(0, 25)}...`
						) : (
							attributes.canonicalTitle
						) : (
							'No Title'
						)}
					</Text>
					<Text style={styles.itemSynopsis}>
						{synopsis ? synopsis.length > 70 ? `${synopsis.substring(0, 70)}...` : synopsis : 'No synopsis'}
					</Text>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>{data.type == 'anime' ? 'Episodies' : 'Chapters'}</Text>
			<FlatList
				data={episodes}
				renderItem={renderItem}
				contentContainerStyle={styles.containerStyle}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
			/>
		</View>
	);
};

export default Episodes;

import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ListItem = ({ item, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Image
				source={{
					uri: item.attributes.posterImage.medium
				}}
				style={styles.image}
				resizeMode="cover"
			/>
			<Text style={styles.title}>{item.attributes.canonicalTitle}</Text>
		</TouchableOpacity>
	);
};

ListItem.defaultProps = {
	item: {},
	onPress: () => {}
};

export default ListItem;

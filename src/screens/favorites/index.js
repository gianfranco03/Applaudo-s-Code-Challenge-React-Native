import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const FavoritesScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Favorites Screen</Text>
			<Text style={styles.navText} onPress={() => navigation.goBack()}>
				Back
			</Text>
		</View>
	);
};

export default FavoritesScreen;

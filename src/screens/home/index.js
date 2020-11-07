import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const HomeScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home Screen</Text>
			<Text style={styles.navText} onPress={() => navigation.navigate('SerieDetailsScreen')}>
				Details Screen
			</Text>
			<Text style={styles.navText} onPress={() => navigation.navigate('FavoritesScreen')}>
				Favorites Screen
			</Text>
		</View>
	);
};

export default HomeScreen;

import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const SerieDetailsScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Serie Details Screen</Text>
			<Text style={styles.navText} onPress={() => navigation.goBack()}>
				Back
			</Text>
		</View>
	);
};

export default SerieDetailsScreen;

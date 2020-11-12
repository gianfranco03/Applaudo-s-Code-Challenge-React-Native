import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styles from './styles';
import colors from 'constants/colors';

const SplashScreen = (props) => {
	const { navigation } = props;
	const [ loading, showLoading ] = useState(false);

	useEffect(() => {
		// show loading component
		setTimeout(() => {
			showLoading(true);
		}, 500);

		// go to home screen after 2 seconds
		setTimeout(() => {
			navigation.replace('HomeScreen');
		}, 2000);
	}, []);

	return (
		<View style={styles.container}>
			<Image source={require('assets/images/app-image.png')} style={styles.appImage} />
			<Text style={styles.titleText}>Gaman</Text>
			{loading ? <ActivityIndicator style={styles.loading} size="large" color={colors.primary} /> : null}
		</View>
	);
};

export default SplashScreen;

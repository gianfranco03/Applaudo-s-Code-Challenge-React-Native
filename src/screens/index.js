import React, { useEffect } from 'react';
import { View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useSelector, useDispatch } from 'react-redux';

import AppNavigator from 'navigation/index';
import showToast from 'utils/toast';

import AppFlowActions from 'store/appFlow/actions';

const RootScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// Subscribe network info
		const unsubscribe = NetInfo.addEventListener((state) => {
			console.log('[RootScreen] Connection type', state.type);
			console.log('[RootScreen] Is connected?', state.isConnected);

			if (!state.isConnected) {
				showToast({ text: 'No internet connection.', type: 'error' });
			}
			dispatch(AppFlowActions.setConnected(state.isConnected));
		});

		return () => {
			console.log('[RootScreen] unMount');
			// Unsubscribe
			unsubscribe();
		};
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<AppNavigator />
		</View>
	);
};

export default RootScreen;

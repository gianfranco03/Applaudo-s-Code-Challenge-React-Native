import NetInfo from '@react-native-community/netinfo';

/**
 * React Native Network Info 
 * @see https://github.com/react-native-netinfo/react-native-netinfo
 */

// Subscribe
export const unsubscribe = NetInfo.addEventListener((state) => {
	console.log('Connection type', state.type);
	console.log('Is connected?', state.isConnected);
});

// export const

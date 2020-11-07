import React from 'react';
import { SafeAreaView, YellowBox } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider as PaperProvider } from 'react-native-paper';

import RootScreen from 'screens/index';

// Ignoring yellow warnings
YellowBox.ignoreWarnings([ 'Animated: `useNativeDriver`', 'Warning: Each', 'Warning: Failed' ]);
console.disableYellowBox = true;

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<PaperProvider>
				<RootSiblingParent>
					<RootScreen />
				</RootSiblingParent>
			</PaperProvider>
		</SafeAreaView>
	);
};

export default App;

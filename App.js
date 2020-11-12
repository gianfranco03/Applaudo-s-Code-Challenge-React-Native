import React from 'react';
import { SafeAreaView, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { PersistGate } from 'redux-persist/lib/integration/react';

import RootScreen from 'screens/index';
import createStore from 'store';

export const { store, persistor } = createStore();

// Paper theme
const theme = {
	...DefaultTheme
};

// Ignoring yellow warnings
YellowBox.ignoreWarnings([ 'Animated: `useNativeDriver`', 'Warning: Each', 'Warning: Failed' ]);
console.disableYellowBox = true;

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Provider store={store}>
				<PaperProvider theme={theme}>
					<RootSiblingParent>
						<PersistGate loading={null} persistor={persistor}>
							<RootScreen />
						</PersistGate>
					</RootSiblingParent>
				</PaperProvider>
			</Provider>
		</SafeAreaView>
	);
};

export default App;

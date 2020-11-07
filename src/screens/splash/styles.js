import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleText: {
		fontSize: wp(5),
		textAlign: 'center',
		fontFamily: typography.fontFamilyBold
	},
	loading: {
		marginTop: hp(5)
	}
});

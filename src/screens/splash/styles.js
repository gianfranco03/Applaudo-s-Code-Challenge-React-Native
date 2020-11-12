import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.backgroundPrimary
	},
	titleText: {
		fontSize: wp(7),
		textAlign: 'center',
		fontFamily: typography.fontFamilyBold
	},
	appImage: {
		width: wp(40),
		height: wp(40)
	},
	loading: {
		marginTop: hp(5)
	}
});

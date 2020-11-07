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
	title: {
		fontFamily: typography.fontFamilyBold,
		fontSize: wp(5)
	},
	navText: {
		fontFamily: typography.fontFamilyRegular,
		fontSize: wp(4.5),
		marginTop: hp(3)
	}
});

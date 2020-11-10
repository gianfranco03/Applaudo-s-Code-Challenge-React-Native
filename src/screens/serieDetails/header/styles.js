import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: hp(3.5)
	},
	image: {
		width: wp(34),
		height: hp(34),
		borderRadius: wp(0.5)
	},
	about: {
		flex: 1,
		paddingLeft: wp(4)
	},
	textTitle: {
		fontSize: wp(3.4),
		color: colors.white,
		fontFamily: typography.fontFamilySemiBold,
		marginBottom: hp(0.5)
	},
	textSubTitle: {
		fontSize: wp(3.2),
		color: colors.white,
		fontFamily: typography.fontFamilyRegular,
		marginBottom: hp(1)
	}
});

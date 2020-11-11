import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: hp(2.5)
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
		color: colors.textColor,
		fontFamily: typography.fontFamilySemiBold,
		marginBottom: hp(0.5)
	},
	textSubTitle: {
		fontSize: wp(3.2),
		color: colors.textColor,
		fontFamily: typography.fontFamilyRegular,
		marginBottom: hp(1)
	},
	headerIcons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: hp(1.5)
	},
	rightIcons: {
		flexDirection: 'row'
	},
	backIcon: {
		color: colors.textColor,
		fontSize: wp(10)
	},
	saveIcon: {
		color: colors.textColor,
		fontSize: wp(7),
		marginRight: wp(4)
	},
	shareIcon: {
		color: colors.textColor,
		fontSize: wp(7)
	}
});

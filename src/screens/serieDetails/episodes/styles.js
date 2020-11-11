import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		marginTop: hp(2)
	},
	textTitle: {
		fontSize: wp(3.4),
		color: colors.textColor,
		fontFamily: typography.fontFamilySemiBold,
		marginBottom: hp(2)
	},
	textSubTitle: {
		fontSize: wp(3.2),
		color: colors.textColor,
		fontFamily: typography.fontFamilyRegular,
		marginBottom: hp(1.5)
	},
	containerStyle: {
		paddingBottom: hp(2)
	},
	separator: {
		height: hp(2)
	},
	itemContainer: {
		height: hp(12),
		flexDirection: 'row',
		backgroundColor: colors.itemBackground,
		borderRadius: wp(1),
		marginBottom: hp(2)
	},
	itemNumber: {
		fontSize: wp(3.2),
		color: colors.textColor,
		fontFamily: typography.fontFamilyRegular,
		position: 'absolute',
		left: 0
	},
	itemAbout: {
		marginLeft: wp(2)
	},
	itemTitleText: {
		marginTop: hp(1),
		fontSize: wp(3),
		color: colors.textColor,
		fontFamily: typography.fontFamilyBold,
		marginBottom: hp(1),
		textAlign: 'left',
		width: wp(52)
	},
	itemSynopsis: {
		fontSize: wp(2.8),
		color: colors.textColor,
		fontFamily: typography.fontFamilyRegular,
		textAlign: 'justify',
		width: wp(52),
		marginBottom: hp(1),
		lineHeight: hp(2.2)
	},
	image: {
		width: wp(30),
		height: hp(12),
		borderRadius: wp(1)
	},
	banIcon: {
		color: colors.textColor,
		fontSize: wp(10)
	},
	iconContainer: {
		width: wp(30),
		height: hp(12),
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0.5,
		borderColor: colors.textColor,
		borderRadius: wp(1)
	}
});

import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundPrimary
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		height: hp(8),
		backgroundColor: colors.primary,
		paddingLeft: wp(4)
	},
	title: {
		fontFamily: typography.fontFamilyLight,
		fontSize: wp(6),
		color: colors.textColorSeconday,
		marginLeft: wp(4)
	},
	backIcon: {
		color: colors.textColorSeconday,
		fontSize: wp(10)
	},
	list: {
		marginTop: hp(3)
	},
	containerStyle: {
		paddingHorizontal: wp(4)
	},
	separator: {
		height: hp(2)
	},
	itemContainer: {
		flexDirection: 'row',
		backgroundColor: colors.itemBackground,
		borderRadius: wp(1),
		overflow: 'hidden'
	},
	itemImage: {
		width: wp(27),
		height: hp(20)
	},
	itemAbout: {
		flex: 1,
		paddingLeft: wp(2),
		justifyContent: 'center'
	},
	textTitle: {
		fontSize: wp(3.6),
		color: colors.textColor,
		fontFamily: typography.fontFamilySemiBold,
		marginBottom: hp(1)
	},
	textSubTitle: {
		fontSize: wp(3.5),
		color: colors.textColor,
		fontFamily: typography.fontFamilyRegular,
		marginBottom: hp(1)
	},
	noInternetContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		marginTop: hp(10)
	},
	wifiImage: {
		width: wp(20),
		height: hp(10)
	},
	noInternetText: {
		marginTop: hp(3),
		fontFamily: typography.fontFamilyBold,
		color: colors.textColor,
		fontSize: wp(4),
		textAlign: 'center'
	},
	noItems: {
		marginTop: hp(8),
		fontFamily: typography.fontFamilyBold,
		color: colors.textColor,
		fontSize: wp(4),
		textAlign: 'center'
	},
	removeIcon: {
		color: colors.textColor,
		fontSize: wp(5),
		position: 'absolute',
		right: wp(2),
		top: wp(1.5)
	}
});

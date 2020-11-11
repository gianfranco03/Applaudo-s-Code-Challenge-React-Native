import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundPrimary,
		paddingHorizontal: wp(4)
	},
	title: {
		fontFamily: typography.fontFamilyBold,
		fontSize: wp(5),
		color: colors.textColor,
		marginLeft: wp(4)
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: hp(1.5),
		marginBottom: hp(2)
	},
	backIcon: {
		color: colors.textColor,
		fontSize: wp(10)
	},
	separator: {
		height: hp(2)
	},
	itemContainer: {
		flexDirection: 'row',
		backgroundColor: 'gray',
		borderRadius: wp(1),
		overflow: 'hidden'
	},
	itemImage: {
		width: wp(25),
		height: hp(20),
		borderRadius: wp(0.5)
	},
	itemAbout: {
		flex: 1,
		paddingLeft: wp(2),
		justifyContent: 'center'
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
	}
});

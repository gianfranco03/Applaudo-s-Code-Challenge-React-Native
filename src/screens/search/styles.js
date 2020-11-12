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
		paddingHorizontal: wp(4),
		flexDirection: 'row',
		alignItems: 'center',
		height: hp(8),
		backgroundColor: colors.primary
	},
	backIcon: {
		color: colors.textColorSeconday,
		fontSize: wp(10),
		marginRight: wp(4)
	},
	searchBar: {
		width: wp(82),
		height: hp(6)
	},
	inputStyle: {
		fontFamily: typography.fontFamilyRegular,
		fontSize: wp(4.5)
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'center',
		// marginTop: wp(2.5),
		marginVertical: hp(3)
	},
	optionContent: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: wp(4)
	},
	optionText: {
		fontFamily: typography.fontFamilyRegular,
		color: colors.textColor,
		fontSize: wp(4)
	},
	loading: {
		marginBottom: hp(3)
	},
	contentContainer: {
		paddingHorizontal: wp(2),
		paddingBottom: hp(2)
	},
	itemMargin: {
		marginHorizontal: wp(2)
	},
	separator: {
		width: wp(2),
		height: hp(2)
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

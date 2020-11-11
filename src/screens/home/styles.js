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
		marginTop: hp(4)
	},
	searchBar: {
		height: hp(6)
	},
	inputStyle: {
		fontFamily: typography.fontFamilyRegular,
		fontSize: wp(4.5)
	},
	headerButton: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 999
	},
	favoritesContainer: {
		alignSelf: 'flex-end',
		marginTop: hp(4),
		marginRight: wp(4),
		marginBottom: hp(-2)
	},
	favoritesText: {
		color: colors.textColor,
		fontFamily: typography.fontFamilySemiBold,
		fontSize: wp(4.2)
	},
	separator: {
		width: wp(2)
	},
	sectionHeader: {
		fontFamily: typography.fontFamilySemiBold,
		fontSize: wp(4.3),
		color: colors.textColor,
		marginVertical: hp(2.5)
	},
	contentContainer: {
		paddingHorizontal: wp(4)
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

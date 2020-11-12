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
		height: hp(8),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primary
	},
	titleText: {
		fontFamily: typography.fontFamilyLight,
		fontSize: wp(6),
		color: colors.textColorSeconday
	},
	searchBarContainer: {
		paddingHorizontal: wp(4),
		marginTop: hp(3)
		// backgroundColor: 'red'
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
	divider: {
		marginTop: hp(3),
		height: 1,
		width: wp(92),
		alignSelf: 'center',
		backgroundColor: colors.textColorTertiary
	},
	favoritesContainer: {
		alignSelf: 'flex-end',
		marginTop: hp(2),
		marginRight: wp(4),
		marginBottom: hp(-2),
		flexDirection: 'row'
	},
	favoriteIcon: {
		width: wp(6),
		height: wp(6),
		marginTop: hp(0.3),
		marginRight: wp(2)
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

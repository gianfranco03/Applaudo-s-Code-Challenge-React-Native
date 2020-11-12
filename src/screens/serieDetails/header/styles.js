import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: hp(2.5),
		paddingHorizontal: wp(4),
		backgroundColor: colors.gray10,
		paddingBottom: hp(3),
		borderBottomRightRadius: wp(3),
		borderBottomLeftRadius: wp(3)
	},
	headerIcons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: hp(8),
		paddingHorizontal: wp(4),
		backgroundColor: '#9999ff'
	},
	rightIcons: {
		flexDirection: 'row'
	},
	backIcon: {
		color: colors.textColorSeconday,
		fontSize: wp(10)
	},
	heartImage: {
		width: wp(8.5),
		height: wp(8.5),
		marginRight: wp(4)
	},
	shareImage: {
		width: wp(8),
		height: wp(8),
		marginRight: wp(2)
	},
	image: {
		width: wp(42),
		height: hp(34),
		borderRadius: wp(0.5)
	},
	about: {
		flex: 1,
		paddingLeft: wp(4)
	},
	textTitle: {
		fontSize: wp(3.6),
		color: colors.textColor,
		fontFamily: typography.fontFamilySemiBold,
		marginBottom: hp(0.5)
	},
	textSubTitle: {
		fontSize: wp(3.5),
		color: colors.textColor,
		fontFamily: typography.fontFamilyRegular,
		marginBottom: hp(1)
	}
});

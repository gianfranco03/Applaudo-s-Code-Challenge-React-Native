import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: hp(1)
	},
	textTitle: {
		fontSize: wp(3.3),
		color: colors.white,
		fontFamily: typography.fontFamilySemiBold,
		marginBottom: hp(1)
	},
	textSubTitle: {
		fontSize: wp(3.1),
		color: colors.white,
		fontFamily: typography.fontFamilyRegular,
		marginBottom: hp(1.5)
	},
	about: {
		flexDirection: 'row',
		marginBottom: hp(1)
	},
	box: {
		flex: 1
	},
	synopsisText: {
		fontSize: wp(3.1),
		color: colors.white,
		fontFamily: typography.fontFamilyRegular,
		marginBottom: hp(1.5),
		lineHeight: hp(2.8)
	},
	youtubeContainer: {
		alignSelf: 'flex-end',
		marginRight: wp(4),
		flexDirection: 'row',
		alignItems: 'center'
	},
	youtubeIcon: {
		fontSize: wp(10),
		color: colors.white,
		marginLeft: wp(2)
	},
	youtubeText: {
		fontSize: wp(3.3),
		color: colors.white,
		fontFamily: typography.fontFamilySemiBold,
		marginTop: wp(0.1)
	}
});

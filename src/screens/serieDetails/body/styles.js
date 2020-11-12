import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: hp(1),
		paddingHorizontal: wp(4)
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
		fontSize: wp(3.5),
		color: colors.textColor,
		fontFamily: typography.fontFamilyRegular,
		marginBottom: hp(1.5),
		lineHeight: hp(2.8)
	},
	youtubeContainer: {
		alignSelf: 'flex-end',
		marginRight: wp(2),
		flexDirection: 'row',
		alignItems: 'center'
	},
	youtubeIcon: {
		fontSize: wp(10),
		color: '#FF0000',
		marginLeft: wp(3)
	},
	youtubeText: {
		fontSize: wp(3.6),
		color: colors.textColor,
		fontFamily: typography.fontFamilySemiBold,
		marginTop: wp(0.1)
	}
});

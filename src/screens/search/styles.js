import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212'
	},
	header: {
		paddingHorizontal: wp(4),
		marginTop: hp(4)
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: hp(3)
	},
	optionContent: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: wp(4)
	},
	optionText: {
		fontFamily: typography.fontFamilyRegular,
		color: colors.white,
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
	}
});

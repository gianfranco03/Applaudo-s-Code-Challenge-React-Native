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
	headerButton: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 999
	},
	separator: {
		width: wp(2)
	},
	sectionHeader: {
		fontFamily: typography.fontFamilySemiBold,
		fontSize: wp(4.3),
		color: '#f4f4f4',
		marginVertical: hp(2.5)
	},
	contentContainer: {
		paddingHorizontal: wp(4)
	}
});

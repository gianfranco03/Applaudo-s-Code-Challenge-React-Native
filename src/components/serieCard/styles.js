import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		height: hp(25),
		width: wp(28),
		borderRadius: wp(0.5),
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	title: {
		fontFamily: typography.fontFamilyRegular,
		color: colors.white,
		position: 'absolute',
		alignSelf: 'center',
		textAlign: 'center',
		bottom: hp(2),
		textShadowColor: 'black',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 1,
		elevation: 5
	}
});

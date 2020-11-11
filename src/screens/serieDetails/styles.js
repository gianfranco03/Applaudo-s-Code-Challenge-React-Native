import { StyleSheet } from 'react-native';

import { hp, wp } from 'services/responsive';
import typography from 'constants/typography';
import colors from 'constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundPrimary,
		paddingBottom: hp(2)
	},
	scroll: {
		paddingHorizontal: wp(4)
	}
});

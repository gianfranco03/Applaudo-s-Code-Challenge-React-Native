import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { hp, wp } from 'services/responsive';

const ListItemSkeleton = () => {
	return (
		<SkeletonPlaceholder>
			<SkeletonPlaceholder.Item width={wp(28)} height={hp(25)} borderRadius={wp(0.5)} />
		</SkeletonPlaceholder>
	);
};

export default ListItemSkeleton;

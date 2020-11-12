import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { hp, wp } from 'services/responsive';

const SerieDetailSkeleton = () => {
	const header = [ 0, 1, 2, 3 ];
	const body = [ 0, 1 ];
	const synopsis = [ 0, 1, 2, 3 ];
	const episodes = [ 0, 1, 2, 3, 4 ];

	const items = [ 0, 1, 2 ];

	const textComponent = (index) => (
		<View key={index}>
			<SkeletonPlaceholder.Item width={wp(30)} height={hp(3.2)} borderRadius={wp(0.5)} />
			<SkeletonPlaceholder.Item
				marginTop={hp(1)}
				width={wp(25)}
				height={hp(3)}
				borderRadius={wp(0.5)}
				marginBottom={hp(1.5)}
			/>
		</View>
	);

	const synopsisComponent = (index) => (
		<View key={index}>
			<SkeletonPlaceholder.Item width={wp(88)} height={hp(2.5)} borderRadius={wp(0.5)} />
			<SkeletonPlaceholder.Item marginTop={hp(1)} width={wp(80)} height={hp(2.5)} borderRadius={wp(0.5)} />
			<SkeletonPlaceholder.Item
				marginTop={hp(1)}
				width={wp(85)}
				height={hp(2.5)}
				borderRadius={wp(0.5)}
				marginBottom={hp(1)}
			/>
		</View>
	);

	const episodesComponent = (index) => (
		<SkeletonPlaceholder.Item
			marginTop={hp(1)}
			width={wp(92)}
			height={hp(12)}
			borderRadius={wp(0.5)}
			marginBottom={hp(1)}
		/>
	);

	const renderItem = (index) => (
		<SkeletonPlaceholder.Item key={index} marginRight={wp(2)}>
			<SkeletonPlaceholder.Item width={wp(28)} height={hp(25)} borderRadius={wp(0.5)} />
		</SkeletonPlaceholder.Item>
	);

	return (
		<View style={{ paddingHorizontal: wp(5), marginTop: hp(2) }}>
			<SkeletonPlaceholder>
				<SkeletonPlaceholder.Item
					marginTop={hp(1)}
					width={wp(15)}
					height={hp(2)}
					borderRadius={wp(0.5)}
					marginBottom={hp(1)}
				/>
				<SkeletonPlaceholder.Item flexDirection="row">
					{items.map((item, index) => renderItem(index))}
				</SkeletonPlaceholder.Item>
				<SkeletonPlaceholder.Item
					marginTop={hp(4)}
					width={wp(18)}
					height={hp(2)}
					borderRadius={wp(0.5)}
					marginBottom={hp(1)}
				/>
				<SkeletonPlaceholder.Item flexDirection="row">
					{items.map((item, index) => renderItem(index))}
				</SkeletonPlaceholder.Item>
			</SkeletonPlaceholder>
		</View>
	);
};

export default SerieDetailSkeleton;

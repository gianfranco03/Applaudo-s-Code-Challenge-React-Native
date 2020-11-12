import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { hp, wp } from 'services/responsive';

const SerieDetailSkeleton = () => {
	const header = [ 0, 1, 2, 3 ];
	const body = [ 0, 1 ];
	const synopsis = [ 0, 1, 2, 3 ];
	const episodes = [ 0, 1, 2, 3, 4 ];

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

	return (
		<SkeletonPlaceholder>
			<SkeletonPlaceholder.Item width={wp(100)} height={hp(8)} />
			<SkeletonPlaceholder.Item paddingHorizontal={wp(4)}>
				<SkeletonPlaceholder.Item flexDirection="row">
					<SkeletonPlaceholder.Item
						marginTop={hp(3.5)}
						width={wp(42)}
						height={hp(34)}
						borderRadius={wp(0.5)}
					/>
					<SkeletonPlaceholder.Item marginTop={hp(3.5)} marginLeft={wp(4)}>
						{header.map((item, index) => textComponent(index))}
					</SkeletonPlaceholder.Item>
				</SkeletonPlaceholder.Item>
				<SkeletonPlaceholder.Item flexDirection="row" marginTop={hp(2)}>
					<View style={{ flex: 1 }}>{body.map((item, index) => textComponent(index))}</View>
					<View style={{ flex: 1 }}>{body.map((item, index) => textComponent(index))}</View>
				</SkeletonPlaceholder.Item>
				<SkeletonPlaceholder.Item marginTop={hp(2)}>
					{synopsis.map((item, index) => synopsisComponent(index))}
				</SkeletonPlaceholder.Item>
				<SkeletonPlaceholder.Item width={wp(30)} height={hp(3.2)} borderRadius={wp(0.5)} marginTop={hp(2)} />
				<SkeletonPlaceholder.Item marginTop={hp(2)}>
					{episodes.map((item, index) => episodesComponent(index))}
				</SkeletonPlaceholder.Item>
			</SkeletonPlaceholder.Item>
		</SkeletonPlaceholder>
	);
};

export default SerieDetailSkeleton;

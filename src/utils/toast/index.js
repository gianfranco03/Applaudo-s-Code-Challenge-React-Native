import Toast from 'react-native-root-toast';

const COLOR = {
	SUCCESS: '#696969',
	ERROR: '#FF0000'
};

const TYPE = {
	SUCCESS: 'success',
	ERROR: 'error'
};

const showToast = (options) => {
	Toast.show(options.text, {
		duration: Toast.durations.LONG,
		position: Toast.positions.BOTTOM,
		animation: true,
		hideOnPress: true,
		delay: 0,
		backgroundColor:
			options.type === TYPE.SUCCESS ? COLOR.SUCCESS : options.type === TYPE.ERROR ? COLOR.ERROR : COLOR.SUCCESS
	});
};

export default showToast;

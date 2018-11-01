const data = require('./utils');

const packages = [
	{
		name: 'react-native',
		url: 'https://facebook.github.io/react-native',
		desc: '官网文档',
		key: '1',
	},
	{
		name: 'react-native-maps',
		url: 'https://github.com/react-community/react-native-maps',
		desc: 'React Native Mapview component for iOS + Android',
		key: '2',
	},
	{
		name: 'react-native-elements',
		url: 'https://react-native-training.github.io/react-native-elements/',
		desc: 'Cross Platform React Native UI Toolkit',
		key: '3'
	},
	{
		name: 'react-native-camera',
		url: 'https://github.com/react-native-community/react-native-camera',
		desc: 'Also supports barcode scanning',
		key: '4',
	},
	{
		name: 'react-native-calendars',
		url: 'https://github.com/wix/react-native-calendars',
		desc: 'React Native Calendar Components',
		key: '5',
	},
	{
		name: 'react-native-guide',
		url: 'https://github.com/reactnativecn/react-native-guide',
		desc: '各类react-native学习资源、开源App和组件',
		key: '6',
	},
	{
		name: 'react-native-fs',
		url: 'https://github.com/itinance/react-native-fs',
		desc: 'Native filesystem access for react-native',
		key: '7',
	},
	{
		name: 'victory-native',
		url: 'https://github.com/FormidableLabs/victory-native',
		desc: 'react native图表',
		key: '8',
	},
	{
		name: 'react-native-orientation',
		url: 'https://github.com/yamill/react-native-orientation',
		desc: 'Listen to device orientation changes',
		key: '9'
	},
	{
		name: 'react-native-debugger',
		url: 'https://github.com/jhen0409/react-native-debugger/releases',
		desc: '调试器',
		key: '10',
	}
];

module.exports = {
	home: {
		httpCode: 200,
		data: {
			line: data.getLineData(),
			patient: data.getScatterData(),
			depart: data.getPieData(),
		}
	},
	details: {
		httpCode: 200,
		data: {
			packages,
		}
	}
};
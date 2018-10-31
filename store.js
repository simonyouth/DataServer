const data = require('./utils');

const packages = [
	{
		name: 'react-native',
		url: 'https://facebook.github.io/react-native',
		desc: '官网文档',
	},
	{
		name: 'react-native-maps',
		url: 'https://github.com/react-community/react-native-maps',
		desc: 'React Native Mapview component for iOS + Android'
	},
	{
		name: 'react-native-elements',
		url: 'https://react-native-training.github.io/react-native-elements/',
		desc: 'Cross Platform React Native UI Toolkit',
	},
	{
		name: 'react-native-camera',
		url: 'https://github.com/react-native-community/react-native-camera',
		desc: 'Also supports barcode scanning',
	},
	{
		name: 'react-native-calendars',
		url: 'https://github.com/wix/react-native-calendars',
		desc: 'React Native Calendar Components',
	},
	{
		name: 'react-native-guide',
		url: 'https://github.com/reactnativecn/react-native-guide',
		desc: '各类react-native学习资源、开源App和组件',
	},
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
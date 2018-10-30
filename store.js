const data = require('./utils');

module.exports = {
	response: {
		httpCode: 200,
		data: {
			line: data.getLineData(),
			patient: data.getScatterData(),
			depart: data.getPieData(),
		}
	},
};
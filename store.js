function getScatterData() {
	let arr = [];
	for (let i = 0; i < 50; i++) {
		arr[i] = {
			x: Math.random() * 50,
			y: Math.random() * 100,
		};
	}
	return arr;
}

module.exports = {
	response: {
		httpCode: 200,
		data: {
			home: [
				{
					"month": 1,
					"compared": "2.3%",
					"lastYear": 1004,
					"thisYear": 1300,
				},
				{
					"month": 2,
					"compared": "10%",
					"lastYear": 2342,
					"thisYear": 3345,
				},
				{
					"month": 3,
					"compared": "-12%",
					"lastYear": 4450,
					"thisYear": 2345,
				},
				{
					"month": 4,
					"compared": "9%",
					"lastYear": 900,
					"thisYear": 990,
				},
				{
					"month": 5,
					"compared": "133%",
					"lastYear": 1004,
					"thisYear": 4655,
				},
				{
					"month": 6,
					"compared": "-64%",
					"lastYear": 5643,
					"thisYear": 1300,
				},
				{
					"month": 7,
					"compared": "2.3%",
					"lastYear": 1004,
					"thisYear": 1300,
				},
				{
					"month": 8,
					"compared": "7%",
					"lastYear": 7003,
					"thisYear": 7790,
				},
				{
					"month": 9,
					"compared": "6%",
					"lastYear": 3453,
					"thisYear": 3676,
				},
				{
					"month": 10,
					"compared": "-9%",
					"lastYear": 3000,
					"thisYear": 2360,
				},
				{
					"month": 11,
					"compared": "3%",
					"lastYear": 5430,
					"thisYear": 5900,
				},
				{
					"month": 12,
					"compared": "13%",
					"lastYear": 4000,
					"thisYear": 5300,
				},
			],
			patient: getScatterData()
		}
	},
};
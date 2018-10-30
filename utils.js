function int(min, max) {
	return Math.floor(Math.random() * (max - min));
}

function num(min, max) {
	return (Math.random() * (max - min));
}

function getScatterData() {
	const arr = [];
	for (let i = 0; i < 50; i++) {
		arr[i] = {
			x: Math.random() * 50,
			y: Math.random() * 100,
		};
	}
	return arr;
}

function getPieData() {
	const arr = [];
	for (let i = 0; i < 5; i++) {
		arr[i] = {
			x: `depart${i}`,
			y: int(1, 400),
			label: `depart${i}`,
		};
	}
	return arr;
}

function getLineData() {
	const arr = [];
	for (let i = 0; i < 6; i++) {
		arr[i] = {
			x: i,
			y: int(0, 1000)
		}
	}
	return arr;
}

module.exports = {
	getPieData,
	getScatterData,
	getLineData,
};

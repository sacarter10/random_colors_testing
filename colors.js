var fs = require('fs');

var randomColor = function () {
	var zeroes = "000000";

	//generate a random number in hexadecimal, between 0 and ffffff
	var randomHex = Math.floor(Math.random()*16777215).toString(16);

	//pad number with leading zeroes if less than 6 digits
	var result = (zeroes + randomHex).slice(-6);

	return ("#" + result);
}

var results = []
var counter = 0;

var looper = setInterval(printTimeAndColor, 333);

function printTimeAndColor () {
	// var now = new Date;
	var color = randomColor();
	console.log("counter is at " + counter);
	results.push(color);
	// results.push({time: now, red: color.slice(0,2), green: color.slice(2,4), blue: color.slice(4,6)});
	counter++;

	if (counter > 500) {
		clearInterval(looper);

		fs.writeFile('resultsEveryHalfSecond.json', JSON.stringify(results, null, 4), function(err) {
			if (err) {
				console.log("Error!");	
			} 
		});
	}
}


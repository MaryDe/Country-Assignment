//Country Information App

//Part 1
//Create a Node.js application that does the following:
//- Takes in one parameter from the command line, the name of a
//country. Note: command line arguments can be read from the global //array `process.argv`
//- Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonPreview the documentView in a new window
//- Outputs information about that specific country. Must be in the following format:
//Country: <country name>
//Top Level Domain: <tld>

var fs = require('fs');
var countries = process.argv[2]

fs.readFile('./countries.json', function(err, data){
if (err){
	throw err
}
var text = JSON.parse(data);
console.log(text);

for(var i = 0; i < text.length; i++) {
	
	if(countries==text[i].name) {
	console.log("Country"+ text[i].name);
	console.log("Top Level Domain" + text[i].topLevelDomain); 
	}
}
})


}
console.log(alphabets[a]);



//Part 2
//- This module should have a function that takes in a 
//filename and a callback function as a parameter. 
//It should then read that file, then parse the JSON. 
//Finally, it should call the callback function and 
//pass the parsed JSON to it.One way to think of this 
//module is as a helper that can read and parse any 
//JSON file. It has nothing to do with 'countries', 
//so to speak.Another way to think of it is as a small 
//wrapper to fs.readFile, except that this function 
//only works with JSON files.The output of the application 
//should have the following format: 

//Country: <country name>
//Top Level Domain: <tld>




//Hints:
//- Use JSON.parse 
//(https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse (Links to an external site.)Links to an external site.) to parse JSON data from files into a JavaScript object.
//Try first completing the assignment without creating a 
//separate module - Extracting the second module out is 
//significantly more difficult.



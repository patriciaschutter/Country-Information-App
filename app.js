// File I/O Practice: Country Information App | FULL STACK COURSE OCT'17 - PATRICIA SCHUTTER 

// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.json Voorbeeld van documentIn een nieuw venster weergeven
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>


// var fs = require("fs")

// fs.readFile('countries.json', 'utf-8', function(err, data) {
//     if (err) {
//         throw err;      
//     }
//     var text = JSON.parse(data)
//     for ( i = 0; i < text.length; i++){
//         if (text[i].name == process.argv[2]) {
//         console.log(`Country: ${text[i].name}`)
//         console.log(`Top Level Domain: ${text[i].topLevelDomain}`)
//     	}
// 	}
// });

// // In your terminal write: node app.js country of choise (you can choose  country thats listed in countries.json)


// Part 2
// - For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// - One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

// - The output of the application should have the following format: 

// Country: <country name>
// Top Level Domain: <tld>

var jsonfilereader = require('./json-file-reader.js')

jsonfilereader.countryInfo('countries.json', process.argv[2])






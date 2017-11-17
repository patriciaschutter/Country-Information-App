var fs = require('fs')

function readFile(filename, cb){
	fs.readFile(filename, function(err,data){
		if (err){
			throw err
		}
		parsedData = JSON.parse(data)
		cb(parsedData)
	})
}


module.exports = {
	FileReader: readFile
	}
// module.exports makes the scope globally so you can use it in other files. In this case 'FileReader' is the key to be used in the other files and it has the value of 'readFile' (which is the function in this file). This way you can exports functions accross files. 
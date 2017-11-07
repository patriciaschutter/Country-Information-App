
let fs = require('fs')


module.exports = {
    countryInfo: function countryDetails(filename, country) {
    fs.readFile(filename, 'utf-8', function(err, data) {
        if (err) {
            throw err
        }
        for ( i = 0; i < JSON.parse(data).length; i++ ) {
            if (JSON.parse(data)[i].name == country) {
                console.log(`Country: ${JSON.parse(data)[i].name}`)
                console.log(`Top Level Domain: ${JSON.parse(data)[i].topLevelDomain}`)
            }
        }
    })
	}
}


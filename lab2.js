const fs = require('fs')
const path = require('path')
var Converter = require("csvtojson").Converter;

const pathoffile = path.join(__dirname, 'data-to-convert', 'customer-data.csv') 
var converter = new Converter({})

const convertCsvToJson = (pathToFile = pathoffile) => {

    console.log('Converting has start')

    converter.fromFile(pathToFile,function(err,result){
        if(err){
            console.log("An Error Has Occured")
            console.log(err)
        } 
        var json = JSON.stringify(result, null, 2)
        fs.writeFileSync(path.join(__dirname, "output", path.basename(pathToFile, '.csv') + '.json'), json)
    });
}
convertCsvToJson(process.argv[2])


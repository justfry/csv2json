const fs = require('fs')
const path = require('path')
const Converter = require("csvtojson").Converter;

const pathoffile = path.join(__dirname, 'data-to-convert', 'customer-data.csv') 
const converter = new Converter({})

const convertCsvToJson = (pathToFile = pathoffile) => {

    console.log('Converting has start')

    converter.fromFile(pathToFile,function(err,result){
        if(err){
            console.log("An Error Has Occured")
            console.log(err)
        } 
        let json = JSON.stringify(result, null, 2)
        fs.writeFileSync(path.join(__dirname, "output", path.basename(pathToFile, '.csv') + '.json'), json)
    });
    console.log("Converting has ended")
}
convertCsvToJson(process.argv[2])


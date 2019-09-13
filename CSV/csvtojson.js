let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'labb1.csv';
let fileOutputName = 'myOutputFile.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
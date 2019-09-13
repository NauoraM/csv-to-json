let csvToJson = require('convert-csv-to-json'); //Den här hämtar modulen.
 
let fileInputName = 'labb1.csv'; //Här hittar den filerna och de ligger i olika variablar.
let fileOutputName = 'myOutputFile.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName); //Här skickar den info till en annan fil som kommer att omvandla den till en json fil.

const csvFilePath='./csvex.csv'
const csv=require('csvtojson')
const fs=require('fs')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
  fs.writeFile('json.json', JSON.stringify(jsonObj), function(err) {})

})
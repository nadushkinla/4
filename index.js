//var http = require('http');
var fs = require('fs')
var request = require('request');

function writeToFile (obj) {
    var course = '';
    for (var key in obj){
        course+= 'ccy = ' + obj[key].ccy+' ';
        course+= 'base_ccy = ' + obj[key].base_ccy+' ';
        course+= 'buy = ' + obj[key].buy+' ';
        course+= 'sale = ' + obj[key].sale+'\n';
    }
    fs.writeFile('index.html', course, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function (error, response, body) {
  if (response.statusCode == 200) {
    writeToFile(JSON.parse(body));
  }  
});
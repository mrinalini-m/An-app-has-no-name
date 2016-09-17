const jeopardy_api = '017ba97220f0e31b09ae6ce0299b2b24e9054be0a9b9dc2a611b1dfeec6a34c8';

var fs = require('fs');
var request = require('request');
var urlPath = 'http://www.opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple&token=017ba97220f0e31b09ae6ce0299b2b24e9054be0a9b9dc2a611b1dfeec6a34c8';
filePath = __dirname + '/data_categorized/9_general_knowledge_hard';

request(urlPath, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
    fs.appendFile(filePath, body, function() {
      
    });
  }
})

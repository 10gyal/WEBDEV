var request = require("request");
const { parse } = require("request/lib/cookies");
request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData['name'], "Username: " + parsedData['username']);
    }
});
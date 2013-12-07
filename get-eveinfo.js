// var http = require('http');

// var options = {
//     // host: "http://www.ceve-market.org",
//     // port: "80",
//     // path: "/api/market/region/10000002/system/30000142/type/34.json"
//     host: 'www.baidu.com',
//     port: 80,
//     path: '/'
// };

// http.get(options, function(strData) {
//     console.log("Connecting...");
// });

// var http = require('http');

// var options = {
//     host: 'shapeshed.com',
//     port: 80,
//     path: '/'
// };
// http.get(options, function(res) {
//     console.log(res.statusCode);
// });

var http = require('http');

var options = {
    host: 'www.ceve-market.org',
    port: 80,
    path: '/api/market/region/10000002/system/30000142/type/34.json'
};

var data = '';

http.get(options, function(res) {
    console.log(res.statusCode);
    res.on('data', function(chunk) {
        data += chunk;
        console.log('!' + chunk);
    });
    res.on('end', function() {
        console.log('END : ' + data);
        console.log('JSON : ' + JSON.parse(data));
    })
});
// works
// var request = require('request')
//   , cheerio = require('cheerio')
//   , async = require('async')
//   , format = require('util').format;

// var reddits = [ 'programming' ]
//   , concurrency = 2;

// async.eachLimit(reddits, concurrency, function (reddit, next) {
//     var url = format('https://www.youtube.com/watch?v=UlCdTjlKln0');
//     request(url, function (err, response, body) {
//         if (err) throw err;
//         var $ = cheerio.load(body);
//         var meta = $('meta')
//         var keys = Object.keys(meta)

//         var ogType;
//         var ogTitle;

//         keys.forEach(function(key){
//             if (  meta[key].attribs
//             && meta[key].attribs.property
//             && meta[key].attribs.property === 'og:type') {                
//                 ogType = meta[key].attribs.content;
//             }
//             console.log(meta[key].attribs)
//         });

//         keys.forEach(function(key){
//             if (  meta[key].attribs
//             && meta[key].attribs.property
//             && meta[key].attribs.property === 'og:title') {
//                 ogTitle = meta[key].attribs.content;
//             }
//         });
        
//         console.log(ogType);
//         console.log(ogTitle);
//         // $('title').each(function () {
//         //     console.log('%s (%s)', $(this).text(), $(this).attr('href'));
//         // });
//         next();
//     });
// });

var scrape = require('html-metadata');

//var url = "https://www.youtube.com/watch?v=UlCdTjlKln0";
var url = "http://localhost:4800";

scrape(url).then(function(metadata){
	console.log(metadata);
});
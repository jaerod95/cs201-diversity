var APIKEY = "a77d71e3d82d418e10a6763fd43ddcb307c8cf04";

var URL = 'http://api.census.gov/data/2010/sf1?key=' + APIKEY + '&get=P0010001,NAME&for=state:*';
var URL2 = 'http://api.census.gov/data/2010/sf1?key=' + APIKEY + '&get=PCT012A015,PCT012A119&for=state:01';


$.ajax({
    url: URL2,
    success: function(data) {
        console.log(data);
    },
    error: function(err, response, something) {
        console.log([err, response, something]);
    }
});
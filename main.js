var URL = "api.census.gov/data/2015/acs5?get=NAME,B01001_001E&for=state:*&key=a77d71e3d82d418e10a6763fd43ddcb307c8cf04"

$.ajax({
    url: URL,
    success: function(data) {
        console.log(data);
    },
    error: function(err, response, something) {
        console.log([err, response, something]);
    }
});
var APIKEY = "a77d71e3d82d418e10a6763fd43ddcb307c8cf04";

var URL = 'http://api.census.gov/data/2010/sf1?key=' + APIKEY + '&get=P0010001,NAME&for=state:*';
var URL2 = 'http://api.census.gov/data/2010/sf1?key=' + APIKEY + '&get=PCT012A015,PCT012A119&for=state:01';

/*
$.ajax({
    url: URL2,
    success: function(data) {
        console.log(data);
    },
    error: function(err, response, something) {
        console.log([err, response, something]);
    }
});

*/
function scroll() {
   
        var ref = document.getElementById('main-submit');
        ref.addEventListener('click', function (e) {
            e.preventDefault(onclick);
             $('#diversity').css('display', 'inherit');
            if (e.target.localName == "button") {
                e = e.target.parentNode;
            }
            var res = e.href.split("#")[1];
            var sH = document.getElementById(res).offsetTop;
            ccc(sH);
        });
        function ccc(scrollH) {
            var scroller = setInterval(myScroller, 20);
            function myScroller() {
                console.log([window.pageYOffset, scrollH]);
                if (window.pageYOffset < (scrollH-20)) {
                    window.scrollTo(0, window.pageYOffset + 20);
                    return;
                } else {
                    clearInterval(scroller);
                }
            }
        }
    }
document.addEventListener('DOMContentLoaded', scroll);
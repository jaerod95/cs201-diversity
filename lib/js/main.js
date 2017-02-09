/*add state funcitonality
add zip code functionality
make the color go onto the man.
make a few pie charts if you have time.*/



var a = 'PCT0120001'; //total                              
var b = 'PCT012A001';  //white                              
var c = 'PCT012B001';  //black_or_african                   
var d = 'PCT012C001';  //american_indea_and_alaska_native   
var e = 'PCT012D001';  //asian                              
var f = 'PCT012E001';  //Hawaiian_and_other_pacific_islander
var g = 'PCT012F001';  //other                              
var h = 'PCT012G001';  //two_or_more                        
var i = 'PCT012H001';  //hispanic   

var APIKEY = "a77d71e3d82d418e10a6763fd43ddcb307c8cf04";

var URL4 = 'http://api.census.gov/data/2015/acs5?get=NAME,B01001_001E&for=zip+code+tabulation+area:84604&key=' +  APIKEY;                     

function scroll() {
   
        var ref = document.getElementById('main-submit');
        ref.addEventListener('click', function (e) {
            e.preventDefault(onclick);
            var STATE = ""

            var URL = 'http://api.census.gov/data/2010/sf1?key=' + APIKEY + '&get=' + a + ',' + b + ',' + c + ',' + d + ',' + e + ',' + f + ',' + g + ',' + h + ',' + i + ',NAME&for=zip+code+tabulation+area:' + ZIP + '&in=state:' + STATE;   


            $.ajax({
                url: URL,
                success: function (data) {
                    console.log(data);
                },
                error: function (err, response, something) {
                    console.log([err, response, something]);
                }
            });





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
/*add state funcitonality
add zip code functionality
make the color go onto the man.
make a few pie charts if you have time.*/

var b = 'PCT012A001';  //white                              
var c = 'PCT012B001';  //black_or_african                   
var d = 'PCT012C001';  //american_indea_and_alaska_native   
var e = 'PCT012D001';  //asian                              
var f = 'PCT012E001';  //Hawaiian_and_other_pacific_islander
var g = 'PCT012H001';  //hispanic   
var i = 'PCT012F001';  //other                                                   

var APIKEY = "a77d71e3d82d418e10a6763fd43ddcb307c8cf04";
var URL = 'http://api.census.gov/data/2010/sf1?key=' + APIKEY + '&get=' + b + ',' + c + ',' + d + ',' + e + ',' + f + ',' + g + ',' + i + '&for=zip+code+tabulation+area:';
var URL4 = 'http://api.census.gov/data/2015/acs5?get=NAME&for=state:*&key=' + APIKEY;

var load = {
    states: { alabama: '01', alaska: '02', arizona: '04', arkansas: '05', california: '06', colorado: '08', connecticut: '09', dc: '11', delaware: '10', florida: '12', georgia: '13', hawaii: '15', iowa: '19', idaho: '16', illinois: '17', indiana: '18', kansas: '20', kentucky: '21', louisiana: '22', massachusetts: '25', maryland: '24', maine: '23', michigan: '26', minnesota: '27', missouri: '29', mississippi: '28', montana: '30', "north carolina": '37', "north dakota": '38', nebraska: '31', "new hampshire": '33', 'new jersey': '34', 'new mexico': '35', nevada: '32', 'new york': '36', ohio: '39', oklahoma: '40', oregon: '41', pennsylvania: '42', 'puerto rico': '72', 'rhode island': '44', 'south carolina': '45', 'south dakota': '46', tennessee: '47', texas: '48', utah: '49', virginia: '51', vermont: '50', washington: '53', wisconsin: '55', 'west virginia': '54', wyoming: '56' },
    
    colors: ['red', 'green', 'orange', 'purple', 'blue', 'yellow', 'brown', 'lightblue'],
    defaultcolors: ['red', 'green', 'orange', 'purple', 'blue', 'yellow', 'brown', 'lightblue'],
    
    race: ['White', 'Black or African', 'American Indian and Alaska Native', 'Asian', 'Hawaiian and other Pacific Islander', 'hispanic', 'other'],
    
    init: function () {

        var ref = document.getElementById('main-submit');
        ref.addEventListener('click', load.scroll);
    },
    scroll: function (e) {
        e.preventDefault(onclick);
        $('#diversity').css('display', 'inherit');
        document.getElementById('colors').innerHTML = "";
        document.getElementById('races').innerHTML = "<h3 style='text-align: center;'></h3>";
        var STATE = load.states[document.getElementById('main-state').value.toLowerCase()];
        if (STATE == undefined) {
            alert('invalid state');
        } else {
            var ZIP = document.getElementById('main-zip').value;

            $.ajax({
                url: URL + ZIP + '&in=state:' + STATE,
                success: function (data) {
                    console.log(data);
                    var dat = data[1];
                    var sum = dat.reduce(function (a, b) {
                        return parseInt(a) + parseInt(b);
                    }, 0);
                    sum = sum - dat[8] - dat[7];
                    console.log(sum);
                    dat.forEach(function(val, index) {
                        dat[index] = val/sum;
                    });
                    var tt = document.createElement('h4');
                    tt.innerHTML = 'Total Population: ' + sum;
                    document.getElementById('races').appendChild(tt);

                    for (var i = 0; i < 7; i++) {
                        var percentage = dat[i].toFixed(4);
                        var temp = document.createElement('div');
                        temp.style.width = '100%';
                        temp.style.opacity = .7;
                        temp.style.borderRadius = '10px';

                        temp.style.height = (500 * percentage).toString() + 'px';
                        var index = Date.now() % load.colors.length;
                        temp.style.background = load.colors[index];
                        load.colors.splice(index, 1);
                        document.getElementById('colors').appendChild(temp);

                        var p = document.createElement('p');
                        p.innerHTML = load.race[i] + ': ' + (percentage * 100).toFixed(2) + "% (" + (data[1][i] * sum).toFixed(0) + ")";
                        document.getElementById('races').appendChild(p);

                    }
                    load.colors = load.defaultcolors;

                },
                error: function (err, response, something) {
                    console.log([err, response, something]);
                }
            });

            if (e.target.localName == "button") {
                e = e.target.parentNode;
            }
            var res = e.href.split("#")[1];
            var sH = document.getElementById(res).offsetTop;
            load.ccc(sH);
        }
    },
    ccc: function (scrollH) {
        var scroller = setInterval(myScroller, 20);
        function myScroller() {
            if (window.pageYOffset < (scrollH - 20)) {
                window.scrollTo(0, window.pageYOffset + 20);
                return;
            } else {
                clearInterval(scroller);
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', load.init);
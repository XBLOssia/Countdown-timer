//NOTE: This version of the countdown clock does not support different schedules for different days
//      This countdown only supports counting down to specific times in the day.
//      In other words, it can only recognize times before the nearest 23:59:59
//      In the future I'll write a version for specific dates that looks the same as this.

var mycount = 1000;
var periodname = 'Loading';

    // Periods can be added or removed by adding or removing variables and child threads
    // Time format : [hh,mm,ss,'period name/number']
    var per1 = [08,30,00,'Period 1'];
    var per2 = [09,23,00,'Period 2'];
    var per3 = [10,16,00,'Period 3'];
    var per4 = [11,09,00,'Period 4'];
    var per5 = [12,02,00,'Period 5'];
    var per6 = [12,55,00,'Period 6'];
    var per7 = [13,48,00,'Period 7'];
    var per8 = [14,41,00,'Period 8'];

var x = setInterval(function() { 
    var current = new Date();
    
    var myhour = current.getHours();
    var mymin = current.getMinutes()+(myhour*60);
    var mytime = current.getSeconds()+(mymin*60);

    //Convert time arrays above to seconds
    var per1secs = (per1[0]*60*60)+(per1[1]*60)+(per1[2]);
    var per2secs = (per2[0]*60*60)+(per2[1]*60)+(per2[2]);
    var per3secs = (per3[0]*60*60)+(per3[1]*60)+(per3[2]);
    var per4secs = (per4[0]*60*60)+(per4[1]*60)+(per4[2]);
    var per5secs = (per5[0]*60*60)+(per5[1]*60)+(per5[2]);
    var per6secs = (per6[0]*60*60)+(per6[1]*60)+(per6[2]);
    var per7secs = (per7[0]*60*60)+(per7[1]*60)+(per7[2]);
    var per8secs = (per8[0]*60*60)+(per8[1]*60)+(per8[2]);

    //debug var below
    donesecs = (60300); //4:45

    //Evaluate current seconds in day with values derived above, subtract time left in day from timer value - looks like I did this backwards, which explains why I had to use math.abs
    //TODO: test and fix that
    if (mytime <= per1secs) {
        mycount = (per1secs - mytime);
        periodname = per1[3];
    }
    else if (mytime <= per2secs) {
        mycount = (per2secs - mytime);
        periodname = per2[3];
    }
    else if (mytime <= per3secs) {
        mycount = (per3secs - mytime);
        periodname = per3[3];
    }
    else if (mytime <= per4secs) {
        mycount = (per4secs - mytime);
        periodname = per4[3];
    }
    else if (mytime <= per5secs) {
        mycount = (per5secs - mytime);
        periodname = per5[3];
    }
    else if (mytime <= per6secs) {
        mycount = (per6secs - mytime);
        periodname = per6[3];
    }
    else if (mytime <= per7secs) {
        mycount = (per7secs - mytime);
        periodname = per7[3];
    }
    else if (mytime <= per8secs) {
        mycount = (per8secs - mytime);
        periodname = per8[3];
    }
    else {
        mycount = (donesecs - mytime);
        periodname = "Doc clocks out";
    }
    
    // Take the value and divide it into minutes and seconds
    var rawseconds = Math.floor( (mycount) % 60 );
    var rawminutes = Math.floor( (mycount/60) % 60 );
    var rawhours = Math.floor( (mycount/(60*60)) % 24);
    var rawdays = Math.floor( mycount/(60*60*24) );
    
    /*var rawminutes = Math.floor(mycount / (60));
    var rawseconds = Math.floor(mycount - (rawminutes*60));*/


    function pad(value) {
        if (value < 10) {
            return '0' + value;
        }
        else {
            return value;
        }
    }

    myminutes = pad(rawminutes);
    myseconds = pad(rawseconds);
    myhours = pad(rawhours);
    mydays = pad(rawdays);
    
    //Display result on page
    document.getElementById("minute").innerHTML = myminutes;  
    document.getElementById("second").innerHTML = myseconds; 
    document.getElementById("hour").innerHTML = myhours;
    document.getElementById("day").innerHTML = mydays;

    //After all countdowns are done, the time should read 0 mins 0 secs - happens sometime after the debug time elapses
    if ((mytime - donesecs) > 0) {
        document.getElementById('minute').innerHTML = '0';
        document.getElementById('second').innerHTML = '0';
    }

    if (myhours > 0) {
        document.getElementById('hourz').style = "display:inline;";
    } else {
        document.getElementById('hourz').style = "display:none;";
    }

    if (mydays > 0) {
        document.getElementById('dayz').style = "display:inline;";
    } else {
        document.getElementById('dayz').style = "display:none;";
    }

    document.getElementById('per').innerHTML = periodname;

}, 500);

var y = setInterval(function() {
    
    if (mycount < 61) {
        document.body.style.background = 'red';
        document.body.style.animationName = 'color';
    }
    else {
        document.body.style.background = '';
        document.body.style.animationName = 'none';
    }
}, 2000);

//random phrase generator - add your own or remove them by adding an entry to the array below.
function randoMsg(){
    var randomesg = [   'Please make your way to class!',
                        'Please make your way to class!',
                        'Please make your way to class!',
                        'Please make your way to class!',
                        'Williston High School',
                        'Williston High School',
                        'Go Coyotes!',
                        'Go Coyotes!',
                        'Go Coyotes!',
                        'What are you waiting for?',
                        'A stitch in time saves nine.',
                        'Time is of the essence.',
                        'Time waits for no one!',
                        'Procrastination is the thief of time.',
                        'Time and tide wait for no one.',
                        'No time like the present!',
                        '"Time stays long enough for those who use it" - Leonardo Da Vinci',
                        '"It has been my observation that most people get ahead during the time that others waste" - Henry Ford',
                        '"To say \'I don\'t have time\' is to say \'I don\'t want to\'." - Lao Tzu',
                    ];
    var z = randomesg[Math.floor(Math.random() * randomesg.length)];
    document.getElementById('foottext').innerHTML = z;
};




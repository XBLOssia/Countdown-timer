var myminutes = 666;

var x = setInterval(function() { 
    var current = new Date();
    var myhour = current.getHours();
    var mymin = current.getMinutes()+(myhour*60);
    var mytime = current.getSeconds()+(mymin*60);


    // Periods can be added or removed by adding or removing variables and child threads
    // Time format : [hh,mm,ss]
    var per1 = [08,30,00];
    var per2 = [09,23,00];
    var per3 = [10,16,00];
    var per4 = [11,09,00];
    var per5 = [12,02,00];
    var per6 = [12,55,00];
    var per7 = [13,48,00];
    var per8 = [14,41,00];

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
    donesecs = (60000);

    //Evaluate current seconds in day with values derived above, subtract time left in day from timer value - looks like I did this backwards, which explains why I had to use math.abs
    //TODO: test and fix that
    if (mytime <= per1secs) {
        var mycount = Math.abs(mytime - per1secs);
    }
    else if (mytime <= per2secs) {
        var mycount = Math.abs(mytime - per2secs);
    }
    else if (mytime <= per3secs) {
        var mycount = Math.abs(mytime - per3secs);
    }
    else if (mytime <= per4secs) {
        var mycount = Math.abs(mytime - per4secs);
    }
    else if (mytime <= per5secs) {
        var mycount = Math.abs(mytime - per5secs);
    }
    else if (mytime <= per6secs) {
        var mycount = Math.abs(mytime - per6secs);
    }
    else if (mytime <= per7secs) {
        var mycount = Math.abs(mytime - per7secs);
    }
    else if (mytime <= per8secs) {
        var mycount = Math.abs(mytime - per8secs);
    }
    else {
        console.log('dayover');
        var mycount = Math.abs(mytime - donesecs);
    }

    // Take the value and divide it into minutes and seconds
    myminutes = Math.floor(mycount / (60));
    var myseconds = Math.floor(mycount - (myminutes*60));

    //Display result on page
    document.getElementById("minute").innerHTML = myminutes;  
    document.getElementById("second").innerHTML = myseconds; 

    //After all countdowns are done, the time should read 0 mins 0 secs - happens sometime after the debug time elapses
    if ((mytime - donesecs) > 0) {
        clearInterval(x);

        document.getElementById('minute').innerHTML = '0';
        document.getElementById('second').innerHTML = '0';
    }

}, 500);

var y = setInterval(function() {
    if (myminutes < 2) {
        document.body.style.background = 'red';
        document.body.style.animationName = 'color';
    }
    else {
        document.body.style.background = 'black';
        document.body.style.animationName = 'none';
    }
}, 2000);
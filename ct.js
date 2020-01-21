var deadline = new Date("dec 25, 2020 15:00:00").getTime();


    
var x = setInterval(function() { 
    var current = new Date();
    var myhour = current.getHours();
    var mymin = current.getMinutes()+(myhour*60);
    var mytime = current.getSeconds()+(mymin*60);

    var per1 = [08,30,00];
    var per2 = [09,23,00];
    var per3 = [10,16,00];
    var per4 = [11,09,00];
    var per5 = [12,02,00];
    var per6 = [12,55,00];
    var per7 = [13,48,00];
    var per8 = [14,41,00];

    per1secs = (per1[0]*60*60)+(per1[1]*60)+(per1[2]);
    per2secs = (per2[0]*60*60)+(per2[1]*60)+(per2[2]);
    per3secs = (per3[0]*60*60)+(per3[1]*60)+(per3[2]);
    per4secs = (per4[0]*60*60)+(per4[1]*60)+(per4[2]);
    per5secs = (per5[0]*60*60)+(per5[1]*60)+(per5[2]);
    per6secs = (per6[0]*60*60)+(per6[1]*60)+(per6[2]);
    per7secs = (per7[0]*60*60)+(per7[1]*60)+(per7[2]);
    per8secs = (per8[0]*60*60)+(per8[1]*60)+(per8[2]);

    //debug var below
    donesecs = (60000);

    console.log(per8secs);

    console.log(mytime)
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
    var myminutes = Math.floor(mycount / (60));
    var myseconds = Math.floor(mycount - (myminutes*60));

    document.getElementById("minute").innerHTML = myminutes;  
    document.getElementById("second").innerHTML = myseconds; 

    if ((mytime - donesecs) > 0) {
        clearInterval(x);

        document.getElementById('minute').innerHTML = '0';
        document.getElementById('second').innerHTML = '0';
    }
}, 1000);

/*
var x = setInterval(function() { 
  
    var now = new Date().getTime(); 
    var t = deadline - now; 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("day").innerHTML =days ; 
    document.getElementById("hour").innerHTML =hours; 
    document.getElementById("minute").innerHTML = minutes;  
    document.getElementById("second").innerHTML =seconds;  
    if (t < 0) { 
            clearInterval(x); 
            document.getElementById("demo").innerHTML = "TIME UP"; 
            document.getElementById("day").innerHTML ='0'; 
            document.getElementById("hour").innerHTML ='0'; 
            document.getElementById("minute").innerHTML ='0' ;  
            document.getElementById("second").innerHTML = '0'; } 
    }, 1000); 
    */
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    if(Math.floor(htime/10)==0)
    {
        val='0'+htime;
        document.getElementById("hrs").innerHTML=val;
    }
    else
    {
        document.getElementById("hrs").innerHTML=htime;
    }
    if(Math.floor(mtime/10)==0)
    {
        val='0'+mtime;
        document.getElementById("min").innerHTML=val;
    }
    else
    {
        document.getElementById("min").innerHTML=mtime;
    }
    if(Math.floor(stime/10)==0)
    {
        val="0"+stime
        document.getElementById("sec").innerHTML=val;
    }
    else
    {
        document.getElementById("sec").innerHTML=stime;
    }
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
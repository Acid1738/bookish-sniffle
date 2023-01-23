const iyeza = ["Wena - ANATII.mp3",
             "ANATII - Ngozi.mp3" , 
             "Ehlatini - ANATII.mp3" ,
             "Ndaweni - ANATII.mp3"  ,
             "Zion (Interlude) - ANATII.mp3" ,
             " Anatii - Ntloni.mp3",
             "Vuka - ANATII.mp3",
             "Anatii - God My Best Friend.mp3",
             "Thixo Onofefe - ANATII.mp3" ];

i = 0;

song = document.getElementById("music");
document.getElementById("music").src = iyeza[i] ;


//default button
document.getElementById("pause").style.display = "none" ;
document.getElementById("norepeat").style.display = "none"

//Next
document.getElementById("next").addEventListener("click", nextSong);

function nextSong() {
     i = i+1;
     if (i>8){
        i=0
     }
     document.getElementById("music").src = iyeza[i] ;
     
     document.getElementById("music").play();
}

//previous
document.getElementById("prevoius").addEventListener("click", previousSong);

function previousSong() {
     i = i-1;
     if (i<0){
        i=8
     }
     document.getElementById("music").src = iyeza[i] ;
     
     document.getElementById("music").play();
}

//play
document.getElementById("play").addEventListener("click", playSong);

function playSong() {
    song.play();
    document.getElementById("pause").style.display = "block" ;
    document.getElementById("play").style.display = "none" ;
}

setInterval(playing , 500);
function playing() {
   if (song.paused){
    //do nothing
   } else {
    document.getElementById("pause").style.display = "block";
    document.getElementById("play").style.display = "none"
   }  
}

//pause
document.getElementById("pause").addEventListener("click", pauseSong);

function pauseSong() {
    song.pause();
    document.getElementById("pause").style.display = "none" ;
    document.getElementById("play").style.display = "block"
}

//repeat
document.getElementById("repeat").addEventListener("click", songRepeat);

function songRepeat() {
    document.getElementById("music").loop = true;
    document.getElementById("repeat").style.display = "none" ;
    document.getElementById("norepeat").style.display = "block"
}

//stop repeat
document.getElementById("norepeat").addEventListener("click", songNoRepeat);

function songNoRepeat() {
    song.loop = false;
    document.getElementById("repeat").style.display = "block" ;
    document.getElementById("norepeat").style.display = "none"
}

//shuffle

document.getElementById("shuffle").addEventListener("click", shuffle);

function shuffle()  {
     i = Math.floor(Math.random() * 9);
     document.getElementById("music").src = iyeza[i] ;
     
     document.getElementById("music").play();

}

//volume


document.getElementById("volume").addEventListener("click", dispvol);

function dispvol() {
    document.getElementById("volback").style.display = "block";
     
    setTimeout( remvol , 5000);
    function remvol() {
        document.getElementById("volback").style.display = "none";
    }
}

setInterval( volume , 200);
function volume() {
    vol = document.getElementById("volnum").innerText;
    vol = vol/100;
    document.getElementById("music").volume = vol ;

}

// change song name 
const song_name = ["Wena",
                   "Ngozi",
                   "Ehlathini",
                   "Ndaweni",
                   "Zion(Interlude)",
                   "Ntloni",
                   "Vuka",
                   "God My Best Friend",
                   "Thixo Onofefe"];

 

//slider infomation //
setInterval( slide , 200);

function slide() {
    ctos = song.currentTime;
    etos = song.duration;

    curmin = Math.floor(ctos/60);
    cursec = Math.round(ctos % 60) ;
    

    endmin = Math.floor(etos/60);
    endsec = Math.round(etos % 60) ;

    document.getElementById("currtime").innerText = "0" + curmin + ":" + cursec;
    document.getElementById("endtime").innerText = "0" + endmin + ":" + endsec;

    slidepo = (ctos/etos)*100;
    document.getElementById("lines").value = slidepo;

    //song name
    document.getElementById("songName").innerText = song_name[i];

    
}

//slider position
document.getElementById("lines").addEventListener("click", slider);

 function slider() {
   slade = document.getElementById("lines").value ;

   sladepo = (slade*etos)/100;

   song.currentTime = sladepo ;
 
}



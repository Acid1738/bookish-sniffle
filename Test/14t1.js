
var timestart = new Date();

jpop = setInterval( fokof, 200)

function fokof() {
  /*the time the test was started*/
  timemin = timestart.getMinutes();
  timesec = timestart.getSeconds();

  /*add 15min to that*/
  timein = timemin + 14;

  /*get the current time*/
  var ixesha = new Date();
  mini = ixesha.getMinutes();
  secon = ixesha.getSeconds();

 /*count down time new - current*/
  countmin =  timein - mini;
  countsec = timesec - secon;

  /*if seconst are negative*/
  if (countsec<0) {
    countsec = countsec + 60;
  }

  document.getElementById("time").innerHTML = countmin + "m " + countsec + "s";
}

document.getElementById("boss").addEventListener("click" , qedile)

function qedile() {

  //scroll to top of page
   window.scrollTo(0,0);

  //pull marks
    aaaa = parseInt(document.querySelector('input[name = "aaaa"]:checked').value);
    aaab = parseInt(document.querySelector('input[name = "aaab"]:checked').value);
    aaac = parseInt(document.querySelector('input[name = "aaac"]:checked').value);
    aaad = parseInt(document.querySelector('input[name = "aaad"]:checked').value);
    aaae = parseInt(document.querySelector('input[name = "aaae"]:checked').value);
    aaaf = parseInt(document.querySelector('input[name = "aaaf"]:checked').value);


  //calculate marks
   result = 4.17*(aaaa + aaab + aaac + aaad + aaae + aaaf);

   document.getElementById("grade").innerHTML = Math.trunc(result);
   document.getElementById("mark").style.width = `${result}%`;

   if (result>80) {
    document.getElementById("mark").style.backgroundColor = "green";
   } else if (result>50) {
    document.getElementById("mark").style.backgroundColor = "blue";
   }  else if (result<50) {
    document.getElementById("mark").style.backgroundColor = "red";
   }
 

  //check if answer is corrct or not
    if(document.getElementById("onepon").checked) {
      document.getElementById("ans11").style.backgroundColor = "green";
      document.getElementById("ans11").style.borderColor = "darkgreen";
    }

    if(document.getElementById("oneptw").checked) {
      document.getElementById("ans12").style.backgroundColor = "green";
      document.getElementById("ans12").style.borderColor = "darkgreen";
    }

    if(document.getElementById("onepth").checked) {
      document.getElementById("ans13").style.backgroundColor = "green";
      document.getElementById("ans13").style.borderColor = "darkgreen";
    }

    if(document.getElementById("onepfo").checked) {
      document.getElementById("ans14").style.backgroundColor = "green";
      document.getElementById("ans14").style.borderColor = "darkgreen";
    }

    if(document.getElementById("onepfi").checked) {
      document.getElementById("ans15").style.backgroundColor = "green";
      document.getElementById("ans15").style.borderColor = "darkgreen";
    }

    if(document.getElementById("onepsi").checked) {
      document.getElementById("ans16").style.backgroundColor = "green";
      document.getElementById("ans16").style.borderColor = "darkgreen";
    }

    //show answers
    document.getElementById("ans11").style.display = "block";
    document.getElementById("ans12").style.display = "block";
    document.getElementById("ans13").style.display = "block";
    document.getElementById("ans14").style.display = "block";
    document.getElementById("ans15").style.display = "block";
    document.getElementById("ans16").style.display = "block";

    //Stop counting down
    clearInterval(jpop) 

    //show how long it took to complete the quiz
    timemin = timestart.getMinutes();
    timesec = timestart.getSeconds();
     
    dio = new Date();
    diominute = dio.getMinutes();
    diosecond = dio.getSeconds();

    finishm = diominute - timemin;
    finishs = diosecond - timesec;

    if (finishs<0) {
     finishs = finishs + 60;
    }

    if (finishm<0) {
      finishm = finishm + 60;
     }
    document.getElementById("time").innerHTML = "Completed in " + finishm + "m " + finishs + "s" ;

  }   


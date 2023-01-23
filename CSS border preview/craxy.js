setInterval( gunna , 100);

function gunna() {
     widc  = document.getElementById("wid").innerHTML ;
     document.getElementById("box").style.width = widc +"%" ;

     heic = document.getElementById("hei").innerHTML ;
     document.getElementById("box").style.height = heic +"%" ;

     toplc  = document.getElementById("topl").innerHTML ;
     document.getElementById("box").style.borderTopLeftRadius = toplc +"px" ;

     toprc  = document.getElementById("topr").innerHTML ;
     document.getElementById("box").style.borderTopRightRadius = toprc +"%" ;

     botlc  = document.getElementById("botl").innerHTML ;
     document.getElementById("box").style.borderBottomLeftRadius = botlc +"%" ;

     botrc  = document.getElementById("botr").innerHTML ;
     document.getElementById("box").style.borderBottomRightRadius = botrc +"%" ;

     /* var copyText = document.getElementById("ct").style;
     navigator.clipboard.writeText(copyText);

     alert(copyText); */
      

    
    }
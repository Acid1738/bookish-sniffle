document.getElementById("zero").addEventListener("click", putzero);
 function putzero() {
    document.getElementById("equation").innerText += "0";
    document.getElementById("actual").innerText += "0" ;
 }

 document.getElementById("point").addEventListener("click", putpoint);
 function putpoint() {
    document.getElementById("equation").innerText += ".";
    document.getElementById("actual").innerText += "." ;
 }

 document.getElementById("tentop").addEventListener("click", puttentop);
 function puttentop() {
    document.getElementById("equation").innerText += "*10^(";
    document.getElementById("actual").innerText += "Math.pow(10," ;
 }
 
 document.getElementById("ans").addEventListener("click", putans);
 function putans() {
    document.getElementById("equation").innerText += "ans";
    document.getElementById("answer").innerText = ans ;
 }

 document.getElementById("eqaul").addEventListener("click", unoo);


 document.getElementById("one").addEventListener("click", putone);
 function putone() {
    document.getElementById("equation").innerText += "1";
    document.getElementById("actual").innerText += "1" ;
    
 }

 document.getElementById("two").addEventListener("click", puttwo);
 function puttwo() {
    document.getElementById("equation").innerText += "2";
    document.getElementById("actual").innerText += "2" ;
 }

 document.getElementById("three").addEventListener("click", putthree);
 function putthree() {
    document.getElementById("equation").innerText += "3";
    document.getElementById("actual").innerText += "3" ;
 }

 document.getElementById("plus").addEventListener("click", putplus);
 function putplus() {
    document.getElementById("equation").innerText += "+";
    document.getElementById("actual").innerText += "+" ;
 }

 document.getElementById("minus").addEventListener("click", putminus);
 function putminus() {
    document.getElementById("equation").innerText += "-";
    document.getElementById("actual").innerText += "-" ;
 }

 document.getElementById("four").addEventListener("click", putfour);
 function putfour() {
    document.getElementById("actual").innerText += "4" ;
    document.getElementById("equation").innerText += "4";
 }

 document.getElementById("five").addEventListener("click", putfive);
 function putfive() {
    document.getElementById("equation").innerText += "5";
    document.getElementById("actual").innerText += "5" ;
 }

 document.getElementById("six").addEventListener("click", putsix);
 function putsix() {
    document.getElementById("equation").innerText += "6";
    document.getElementById("actual").innerText += "6" ;
 }

 document.getElementById("times").addEventListener("click", puttimes);
 function puttimes() {
    document.getElementById("equation").innerText += "*";
    document.getElementById("actual").innerText += "*" ;
 }

 document.getElementById("divide").addEventListener("click", putdivide);
 function putdivide() {
    document.getElementById("equation").innerText += "/";
    document.getElementById("actual").innerText += "/" ;
 }

 document.getElementById("seven").addEventListener("click", putseven);
 function putseven() {
    document.getElementById("equation").innerText += "7";
    document.getElementById("actual").innerText += "7" ;
 }

 document.getElementById("eight").addEventListener("click", puteight);
 function puteight() {
    document.getElementById("equation").innerText += "8";
    document.getElementById("actual").innerText += "8" ;
 }

 document.getElementById("nine").addEventListener("click", putnine);
 function putnine() {
    document.getElementById("equation").innerText += "9";
    document.getElementById("actual").innerText += "9" ;
 }

 document.getElementById("delete").addEventListener("click", putdelete);
 function putdelete() {
    document.getElementById("equation").innerText = "";
    document.getElementById("actual").innerText = "" ;
 }

 document.getElementById("remove").addEventListener("click", putremove);
 function putremove() {
    document.getElementById("equation").innerText = "";
    document.getElementById("actual").innerText = "" ;
 }

 document.getElementById("lefb").addEventListener("click", putlefb);
 function putlefb() {
    document.getElementById("equation").innerText += ")";
    document.getElementById("actual").innerText += ")" ;
 }

 document.getElementById("rgtb").addEventListener("click", putrgtb);
 function putrgtb() {
    document.getElementById("equation").innerText += "(";
    document.getElementById("actual").innerText += "(" ;
 }

 document.getElementById("sqrt").addEventListener("click", putsqrt);
 function putsqrt() {
    document.getElementById("equation").innerText += "sqrt(";
    document.getElementById("actual").innerText += "Math.sqrt(" ;
 }

 document.getElementById("powr").addEventListener("click", putpowr);
 function putpowr() {
    document.getElementById("equation").innerText += "^";
    document.getElementById("actual").innerText += "**" ;
 }

 document.getElementById("sin").addEventListener("click", putsin);
 function putsin() {
    document.getElementById("equation").innerText += "sin(";
    document.getElementById("actual").innerText += "Math.sin(" ;
 }

 document.getElementById("cos").addEventListener("click", putcos);
 function putcos() {
    document.getElementById("equation").innerText += "cos(";
    document.getElementById("actual").innerText += "Math.cos(" ;
 }

 document.getElementById("natl").addEventListener("click", putnatl);
 function putnatl() {
    document.getElementById("equation").innerText += "e";
    document.getElementById("actual").innerText += "2.718281828459" ;
 }

 document.getElementById("log").addEventListener("click", putlog);
 function putlog() {
    document.getElementById("equation").innerText += "log(";
    document.getElementById("actual").innerText += "Math.log" ;
 }

 document.getElementById("sqrd").addEventListener("click", putsqrd);
 function putsqrd() {
    document.getElementById("equation").innerText += "^2";
    document.getElementById("actual").innerText += "**2" ;
 }

 document.getElementById("tan").addEventListener("click", puttan);
 function puttan() {
    document.getElementById("equation").innerText += "tan(";
    document.getElementById("actual").innerText += "Math.tan(" ;
 }


  /* setInterval( unoo , 1000); */
  function unoo() {
    temp = document.getElementById("actual").innerHTML;
    temp = eval(temp);
    temp = parseFloat(temp).toFixed(2);
    ans = temp;
        document.getElementById("answer").innerText = temp ;
  }

setInterval(vuyo , 200)

function vuyo() {
input = parseFloat(document.getElementById("number").value);


if (isNaN(input)) {
   input = 0;
}
//////////////////////////////////////////////////////////////////////
    if (document.getElementById("optcels").selected) {

      document.getElementById("cels").style.display = "none";
      
      kelvin = (271.15+input).toFixed(2);
      document.getElementById("kelvin").innerText = kelvin + " k";
      
      fahrenheit = ((input*1.8)+32).toFixed(2);
      document.getElementById("fahrenheit").innerText = fahrenheit + " F" ;

       color = Math.round(kelvin);

   } else {
      document.getElementById("cels").style.display = "block";
   }
/////////////////////////////////////////////////////////////////////////
   if (document.getElementById("optkelv").selected) {

      document.getElementById("kelv").style.display = "none";

      fahrenheit = ((input - 273.15)* 1.8 +32).toFixed(2);
      document.getElementById("fahrenheit").innerText = fahrenheit + " F" ;

      celsius = (input - 273.15).toFixed(2);
      document.getElementById("celsius").innerText = celsius + " C";

       color = Math.round(input);

   } else {
         document.getElementById("kelv").style.display = "block";
   }
///////////////////////////////////////////////////////////////////
   if (document.getElementById("optfahr").selected) {

      document.getElementById("fahr").style.display = "none";

      celsius=( (input -32)*(5/9)).toFixed(2);
      document.getElementById("celsius").innerText = celsius + " C";

      kelvin = ((input - 32)*(5/9) + 273.15).toFixed(2);
      document.getElementById("kelvin").innerText = kelvin + " k" ;

      color = Math.round(kelvin);
   }  else {
      document.getElementById("fahr").style.display = "block";
   }    


green = -1.02*(10**-5)*(color**2)+(0.102*color);
green = Math.round(green);

//blue
blue = 0.0255*color;
blue = Math.round(blue);

//red
red = (-0.0255*color)+255;
red = Math.round(red);


document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")" ;

}
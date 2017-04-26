function conv2Cel(){

var valFah = (parseInt(document.getElementById("valorF").value));

if (valFah !== 'undefined') {
var valConv= Math.round(((valFah-32)*5/9));
} else {
  alert ("ingrese un numero")}
document.getElementById("valorConvertido").value = valConv + " grados celsius"; 
}


function conv2Fah(){

var valCel = (parseInt(document.getElementById("valorC").value));

if (valCel !== 'undefined') {
var valConv= Math.round(valCel*9/5+32);
} else {
  alert ("ingrese un numero")}
document.getElementById("valorConvertido").value = valConv + " grados Fahrenheit";

}





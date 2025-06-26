/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

*/


const string = prompt('asdasd')
function checkString(string) {
  if (string === "") {
    console.log("The string is empty!.");
    
  }

   if (string === string.toUpperCase() || string !== string.toLowerCase()) {
  alert("The string is make of capital letters.");
  }
  if (string === string.toLowerCase() && string !== string.toUpperCase()) {
    alert("The string is make of lower letters.");
  }
 
  else {
    alert("The string has capital letters and lower letters.");
  }
}

checkString(string);
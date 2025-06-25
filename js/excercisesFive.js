/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const stringText = [];

const analicemosLaSituacion = (stringText) => {
  const stringTextGiven = prompt(
    "Give me a string of text, and we will see if there has only capital letter, or lower letter, or for a mix of bot broo"
  );
  stringText += stringTextGiven;
  console.log(stringText);
};
*/
const cadena = prompt(`Give me a word and we'll search if it has a capital letter, lower letter or mixed bot`)

function analizarCadena1(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "La cadena está formada solo por MAYÚSCULAS.";
  } else if (cadena === cadena.toLowerCase()) {
    return "La cadena está formada solo por minúsculas.";
  } else {
    return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
  }
}

analizarCadena1()


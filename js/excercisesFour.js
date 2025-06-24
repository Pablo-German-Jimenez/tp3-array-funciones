/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

const userText = parseInt(prompt('Give me a integer number and we will if its even or odd'));
console.log(userText)
function verifyEvenOdd(userText){
    if(userText%2===0){
        return document.writeln(`The result is even!`)
    }else{
        return document.writeln(`The result is Odd!`)
    }
}

verifyEvenOdd()
/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

const multiplyTable=()=>{
    const numUser = parseInt(prompt(`We'll gonna to multiply number,so, tell me some`));
    for(let i = 1; i<=10;i++){
    document.writeln(`<h3 >The number choice is: ${numUser} x ${i} = ${numUser*i}</h3>`);        
}}

multiplyTable()
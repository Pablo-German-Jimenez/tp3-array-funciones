/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:*/

function solicitarCiudades() {
    let ciudadesArray = [];

    while (true) {
        let ciudadUsuario = prompt("Introduce el nombre de una ciudad (o cancela para finalizar):");
        if (ciudadUsuario === null) {
            break;
        }
        ciudadesArray.push(ciudadUsuario); 
    }
    return ciudadesArray; 
}
function mostrarCiudades(ciudadesArray) {
    if (ciudadesArray.length === 0) {
        document.writeln("No se han ingresado ciudades.");
    } else {
        document.writeln("Ciudades ingresadas: ");
        ciudadesArray.forEach((ciudadUsuario, index) => {
            document.writeln(`${index + 1}. ${ciudadUsuario}`);
        });
    }
}
function llamarCiudades() {
    const ciudadesArray = solicitarCiudades(); 
    mostrarCiudades(ciudadesArray); 
}
llamarCiudades(); 



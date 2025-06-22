/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:*/

/*function solicitarCiudad(){
    const ciudades = [];

const ciudadUsuario = prompt('Decime que ciudad queres irte de vacaciones mateeer');  

while(ciudadUsuario!==null){
    
    if(ciudadUsuario!==null){
        ciudades.push(ciudadUsuario.trim());
    }
    console.log(ciudades)
}
}

function mostrarCiudades(ciudadUsuario){
    if(ciudadUsuario.length>0){
        document.writeln(`Aqui estan las ciudades que ingresaste${ciudades.join(',')}`)
    }else{
        document.writeln('No ingreso nadaa')
    }
}

const listCiudades = solicitarCiudad();
*/
/*
// Función para solicitar y almacenar ciudades
// Función para solicitar nombres de ciudades al usuario
function solicitarCiudades() {
    let ciudades = []; // Arreglo para almacenar las ciudades

    while (true) {
        let ciudad = prompt("Introduce el nombre de una ciudad (o cancela para finalizar):");
        if (ciudad === null) { // Si el usuario cancela
            break;
        }
        ciudades.push(ciudad); // Añade la ciudad al arreglo
    }

    return ciudades; // Retorna el arreglo de ciudades
}

// Función para mostrar el arreglo de ciudades
function mostrarCiudades(ciudades) {
    if (ciudades.length === 0) {
        document.writeln("No se han ingresado ciudades.");
    } else {
        document.writeln("Ciudades ingresadas: ");
        ciudades.forEach((ciudad, index) => {
            document.writeln(`${index + 1}. ${ciudad}`);
        });
    }
}

// Función principal
function main() {
    const ciudades = solicitarCiudades(); // Llama a la función para solicitar ciudades
    mostrarCiudades(ciudades); // Muestra las ciudades ingresadas
}

// Ejecuta la función principal
main();*/

function ciudades(){
    const ciudades = [];
    const ciudadesUsuario = prompt('Decime que ciudad te gustan! si cancelas el chat te muestro las ciudades almacenadas!');
    const ciudadesTodas = `${ciudades}+${ciudadesUsuario}`;
    }

    function respuestas(ciudadesUsuario,ciudadesTodas){
        while(true){
            if(ciudadesUsuario===null){
                document.writeln(`Y las ciudades que te gustan son chararan!${ciudadesTodas}`)
        }else{
            ciudadesUsuario = prompt(`Sigamos almacenando ciudades que te gustan broo!`)

        }
    }}

    ciudades()
    respuestas()
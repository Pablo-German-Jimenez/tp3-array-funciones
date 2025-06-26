/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:*/
let ciudadUsuario = [];
let ciudadesArray = [];



function solicitarCiudades() {
     ciudadesArray = [];

    while (true) {
         ciudadUsuario = prompt(" Introduce a city name(or cancel to finish)");
        if (ciudadUsuario === null) {
            break;
        }
        ciudadesArray.push(ciudadUsuario); 
    }
    return ciudadesArray; 
}
function mostrarCiudades(ciudadesArray) {
    if (ciudadesArray.length === 0) {
        document.writeln("no cities have been entered");
    } else {
        
        document.writeln(`The cities choice is: ${ciudadesArray}<br>`)
        document.writeln(`The length of the array is: ${ciudadesArray.length}<br>`)
        document.writeln(`The first position of array is :${ciudadesArray[0]}, the third is ${ciudadesArray[3]} and the last is ${ciudadesArray[ciudadesArray.length-1]}<br>`);
                         
    }
}
function llamarCiudades() {
    const ciudadesArray = solicitarCiudades(); 
    ciudadesArray.push('Paris');  
    
    mostrarCiudades(ciudadesArray); 
    
      
}


function agregoBarcelona(){
          ciudadesArray.splice(1,0,`<p class='text-danger'>BarCeloNa</p>`);
          document.writeln(`<h4>Right now, the second element of array is: ${ciudadesArray[1]}</h4>`)
}

llamarCiudades(); 
agregoBarcelona();







/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:*/
let ciudadUsuario = [];
let ciudadesArray = [];



function solicitarCiudades() {
     ciudadesArray = [];

    while (true) {
         ciudadUsuario = prompt("Introduce el nombre de una ciudad (o cancela para finalizar):");
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
        
        document.writeln(`Las ciudades elegidas son ${ciudadesArray}<br>`)
        document.writeln(`La longitud del arreglo es ${ciudadesArray.length}<br>`)
        document.writeln(`La primera posición del array :${ciudadesArray[0]}, la tercera posición es ${ciudadesArray[3]} y la última es ${ciudadesArray[ciudadesArray.length-1]}<br>`);
        

 
        
                
    }
}
function llamarCiudades() {
    const ciudadesArray = solicitarCiudades(); 
    ciudadesArray.push('Paris');  
    
    mostrarCiudades(ciudadesArray); 
    
      
}


function agregoBarcelona(){
          let agregoBarsa = ciudadesArray.splice(1,0,`<p class='text-danger'>Barcelona</p>`)
          document.writeln(`<h4>Ahora el segundo elemento del array es:${agregoBarsa}</h4>`)
}

llamarCiudades(); 
agregoBarcelona();







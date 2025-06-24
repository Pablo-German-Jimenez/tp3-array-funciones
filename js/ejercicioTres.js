/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/
const dadoUno = prompt('Decime tu nombre para tirar el primer dados!');
const dadoDos = prompt('Y ahora decime el nombre del segundo jugador! (jugaba alone estaba más solo que loco malo! jajaja)')
const resultadoRandom = [];
const lanzamientoDados = [];
const resultadoDados = [];

/*funcion lanzar dados arroja numeros aleatorios entre 1 y 6*/
function entreUnoySeis(resultadoRandom){
     resultadoRandom = Math.floor(Math.random()*6)+1;
        console.log(resultadoRandom)
        return resultadoRandom
}

function sumaDados(resultadoDados){
        for(i=0;i<50;i++){
                resultadoDados = Math.floor(Math.random()*50)+1;
                console.log(resultadoDados)
                document.writeln(`El resultado de la suma del lanzamiento de dos dados es ${resultadoDados}`)
                return resultadoDados
        }
}

document.writeln(`Tu resultado ${dadoUno} es ${entreUnoySeis(resultadoRandom)} y el de ${dadoDos} es igual a ${entreUnoySeis(resultadoRandom)}<br>`)

entreUnoySeis()
sumaDados()
/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/
const dadoUno = prompt(`Give me the name player one!`);
const dadoDos = prompt('Nice! now, give me the player two name! (jugaba alone estaba más solo que loco malo! jajaja)')
const resultadoRandom = [];
const lanzamientoDados = [];
const resultadoDados = [];
const resultadoRandomDos = [];

/*funcion lanzar dados arroja numeros aleatorios entre 1 y 6*/
function entreUnoySeis(resultadoRandom,resultadoRandomDos){
     resultadoRandom = Math.floor(Math.random()*6)+1;
     resultadoRandomDos = Math.ceil(Math.random()*6)+1;
        console.log(resultadoRandom)
        return resultadoRandom,resultadoRandomDos
}

function sumaDados(resultadoDados){
        for(i=0;i<50;i++){
                resultadoDados = Math.floor(Math.random()*50)+1;
                console.log(resultadoDados)
                document.writeln(`The result of throwing two dices is:  ${resultadoDados}`)
                return resultadoDados
        }
}

document.writeln(`Your result ${dadoUno} is ${entreUnoySeis(resultadoRandom)} ,and of ${dadoDos} is equal to ${entreUnoySeis(resultadoRandomDos)}<br>`)

entreUnoySeis()
sumaDados()
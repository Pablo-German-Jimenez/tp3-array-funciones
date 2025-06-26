/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
⦁	La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58*/
function calculatePerimeter(sideRectangleOne,sideRectangleTwo){
 return perimeter = 2*(sideRectangleOne+sideRectangleTwo);
}

const sideRectangleOne = parseInt(prompt('give me the value of a side reactangle'));
const sideRectangleTwo =  parseInt(prompt('and now give me the value of the other side of the reactangle!'));




alert(`The value of the rectangle is ${calculatePerimeter(sideRectangleOne,sideRectangleTwo)}`);
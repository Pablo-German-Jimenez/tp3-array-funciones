/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.*/

const mounth = ['January','February' ,'March' ,'April','May','June','July' ,'August' ,'September' ,'October' ,'November' ,'December'];


document.writeln('<h2>Mounth List</h2>');

for(let i = 0 ; i< mounth.length;i++){
document.writeln(`<ul class='text-success'><li '>${mounth[i]}</li></ul>`);
}


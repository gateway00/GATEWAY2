/*
Dada una cantidad en nuevos soles, obtener la equivalencia en dólares, asumiendo que la unidad cambiaría es un dato desconocido
*/
let v1,v2,dolares;
v1=prompt("Ingrese el dinero en soles");
v2=prompt("Ingrese el precio en dolares");
dolares= parseInt(v1)*parseInt(v2)  ;

document.write("La equivalencia en dolares es "+dolares+"$");

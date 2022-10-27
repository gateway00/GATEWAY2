/*
En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área Porcentaje del presupuesto
Ginecología ==>> 40%
Traumatología ==>> 30%
Pediatría ==>>30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto presupuestal.
*/
let PA,PG,PT;
PA=prompt("Escriba el monto del presupuesto anual :");

PG=(parseInt(PA)*40) /100;
PP= (parseInt(PA)*30)/100;
PT= (parseInt(PA)*30) /100;


document.write("La cantidad  que recibirá  Ginecología "+PG);
document.write("La cantidad que recibirá  Traumatoloía "+PT );
document.write("La cantidad que recibirá  Pedriatría "+PT);

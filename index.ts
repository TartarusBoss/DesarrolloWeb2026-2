//EJERCICIO 1: Crear array con 5 nombres de estudiantes y mostrar cada uno con un ciclo
console.log ("Ejercicio 1");
let estudiantes = ["Matias", "Juan", "Ana", "María", "Miguel"]


for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i]);
}


//EJERCICIO 2: Imprimir cuantos estudiantes hay en la lista
console.log ("Ejercicio 2");
console.log("Cantidad de estudiantes: ", estudiantes.length);


//EJERCICIO 3: Crear un array de números y calcular la suma total

console.log ("Ejercicio 3");
let numeros = [30, 40, 50, 60, 70, 80];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}
console.log("Suma:", suma);

//EJERCICIO 4: Crear array de numeros (minimo 15 y mostrar la suma)
console.log ("Ejercicio 4");

let numeros2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let suma2 = 0

for (let i = 0; i < numeros2.length; i++) {
    suma2 = suma2 + numeros2[i];

}
console.log("Suma de los 15 números:", suma2);

//EJERCICIO 5: Calcular el promedio de los números del punto 3
console.log ("Ejercicio 5");
let promedio = suma / numeros.length
console.log("El promedio de los numeros es: " , promedio)


//EJERCICIO 6: Imprimir los números mayor a 50 del punto 3.
console.log ("Ejercicio 6");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 50) {
        console.log(numeros[i]);
    }
}


//EJERCICIO 7: Crear un objeto de persona con nombre, edad, ciudad e imprimir sus valores
console.log ("Ejercicio 7");
let persona = {
    nombre: "Matias",
    edad: 21,
    ciudad: "Medellín"
};


console.log("Nombre: ", persona.nombre)
console.log("Edad: ", persona.edad)
console.log("Ciudad: ",persona.ciudad)

//EJERCICIO 8: Crear un array de productos (nombre y precio) e imprimirlos
console.log ("Ejercicio 8");

let productos


//EJERCICIO 9: Encontrar el producto con mayor precio del array e imprimirlo
console.log ("Ejercicio 9");

//EJERCICIO 10:Agregar la cantidad de unidades disponibles a cada producto y calcular el valor
console.log ("Ejercicio 10");


//EJERCICIO 11: Crear un array de estudiantes donde cada estudiante tiene nombre, semestre
// y un array de materias (cada materia tiene nombre, nota). Calcular el
//promedio de cada estudiante y el promedio de todos los estudiantes.
console.log ("Ejercicio 11");


//EJERCICIO 12: Imprimir el nombre de los estudiantes que tiene promedio mayor a 3.5   
console.log ("Ejercicio 12");




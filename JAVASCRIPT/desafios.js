//'use strict';
//Hacer un programa que salude.
/* console.log("Hola");
document.write("Hola"); */

// Hacer un programa que salude por nombre, si no recibe nombre solo saludar Hola.
/* const nombreUsuario = prompt("Ingrese su nombre");
if (nombreUsuario) {
  document.write("Hola, " + nombreUsuario + "!");
} else {
  document.write("Hola");
} */

// Hacer un programa que reciba del usuario un número y muestre si el número ingresado es cero, de otra manera que muestre si es positivo o si es negativo

/*const numero = prompt("Ingrese un número");
console.log("Ingrese un número");
if(numero == 0){
  document.write("El número que ingreso es 0");
}
else if (numero >0) {
  document.write("El número que ingreso es positivo");
} else {
  document.write("El número que ingreso es negativo");
} */

// Hacer un programa que reciba del usuario dos números y muestre cual es el número mayor y muestre cual es el número menor

const numero1 = prompt("Ingrese el primer número");
console.log("Ingrese el primer número");
const numero2 = prompt("Ingrese el segundo número");
console.log("Ingrese el segundo número");
if (numero1 > numero2){
  document.write(`Los números ingresados se pueden clasificar como: ${numero1} es mayor a ${numero2}`);
}
else if (numero1 < numero2){
  document.write(`Los números ingresados se pueden clasificar como: ${numero1} es menor a ${numero2}`);
}
if (numero1 == 0 || numero2 == 0){
  document.write("Los números ingresados fueron 0 y no se pueden clasificar como mayor o menor")
};

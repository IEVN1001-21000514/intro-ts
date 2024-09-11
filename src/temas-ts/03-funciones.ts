// Define una función llamada `suma` que no recibe parámetros ni devuelve un valor
function suma (){
    // Declara una variable `x` con valor 2
    let x = 2;
    // Declara una variable `y` con valor 4
    let y = 4;
    // Suma `x` e `y` y almacena el resultado en la variable `d`
    let d = x + y;
    // Imprime el resultado de la suma en la consola
    console.log(d);
}

// Define una función llamada `resta` que toma dos parámetros `a` y `b` de tipo número y devuelve un número
function resta(a: number, b: number): number {
    // Devuelve la resta de `a` y `b`
    return a - b;
}

// Llama a la función `resta` con los argumentos 10 y 3, y guarda el resultado en la constante `res`
const res: number = resta(10, 3);
// Imprime el resultado de la resta en la consola
console.log(`La resta es ${res}`);

// Define una interfaz `Mascotas` que describe la estructura de un objeto de tipo mascota
interface Mascotas {
    name: string; // Nombre de la mascota
    edad: number; // Edad de la mascota
    raza: string; // Raza de la mascota
    mostrar: () => void; // Método para mostrar información de la mascota
}

// Define una función llamada `calcular` que toma un objeto `mascota` de tipo `Mascotas` y un número `x`
function calcular(mascota: Mascotas, x: number): void {
    // Aumenta la edad de la mascota en `x` años
    mascota.edad += x;
    // Llama al método `mostrar` de la mascota para imprimir información actualizada
    console.log(mascota.mostrar());
}

// Crea un objeto `nuevaMascota` que sigue la interfaz `Mascotas`
const nuevaMascota: Mascotas = {
    name: 'Fido', // Nombre de la mascota
    edad: 3, // Edad inicial de la mascota
    raza: 'Golden', // Raza de la mascota
    // Define el método `mostrar` que imprime el nombre y la edad de la mascota
    mostrar: () => {
        console.log(`Hola soy ${nuevaMascota.name} y tengo ${nuevaMascota.edad}`);
    }
}

// Llama a la función `calcular` con `nuevaMascota` y 4 como argumentos
calcular(nuevaMascota, 4); // Esto aumentará la edad de `nuevaMascota` de 3 a 7 y mostrará la información actualizada

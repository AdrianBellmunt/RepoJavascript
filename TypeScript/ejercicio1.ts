let numeros: number[] = [];
let suma: number = 0;
let mayoresDe100: number = 0;

for (let i = 0; i < 5; i++) {
  const numero = parseInt(prompt(`Introduce el número ${i+1}:`));
  numeros.push(numero);
  suma += numero;
  if (numero > 100) {
    mayoresDe100++;
  }
}

console.log(`La suma de los 5 números es ${suma}`);
console.log(`${mayoresDe100} de los números introducidos son mayores de 100`);

const numeros4: number[] = [];

let suma4 = 0;

for (let i = 0; i < 1500; i++) {
  const numero = Math.floor(Math.random() * 100) + 1;
  numeros4.push(numero);
  suma4 += numero;
}

console.log("Cantidad de números:", numeros4.length);
console.log("Suma total:", suma4);

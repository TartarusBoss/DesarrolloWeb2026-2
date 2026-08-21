export {};

type Producto = { nombre: string; precio: number };

const productos: Producto[] = [
  { nombre: "Arroz", precio: 5000 },
  { nombre: "Leche", precio: 4000 },
  { nombre: "Pan", precio: 3000 },
];

let mayor = productos[0]!;
for (const p of productos.slice(1)) {
  if (p.precio > mayor.precio) {
    mayor = p;
  }
}

console.log("Producto más caro:", mayor.nombre);
console.log("Precio:", mayor.precio);

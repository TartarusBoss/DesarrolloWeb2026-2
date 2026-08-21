type ProductoInventario = { nombre: string; precio: number; cantidad: number };

const productos10: ProductoInventario[] = [
  { nombre: "Arroz", precio: 5000, cantidad: 10 },
  { nombre: "Leche", precio: 4000, cantidad: 5 },
  { nombre: "Pan", precio: 3000, cantidad: 20 },
];

let total10 = 0;
for (const p of productos10) {
  total10 += p.precio * p.cantidad;
}

console.log("Valor total del inventario:", total10);

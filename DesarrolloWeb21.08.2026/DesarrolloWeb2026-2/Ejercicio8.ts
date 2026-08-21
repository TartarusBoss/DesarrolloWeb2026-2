type Producto = { nombre: string; precio: number };

const productos8: Producto[] = [
  { nombre: "Arroz", precio: 5000 },
  { nombre: "Leche", precio: 4000 },
  { nombre: "Pan", precio: 3000 },
];

for (const p of productos8) {
  console.log("Nombre:", p.nombre);
  console.log("Precio:", p.precio);
}

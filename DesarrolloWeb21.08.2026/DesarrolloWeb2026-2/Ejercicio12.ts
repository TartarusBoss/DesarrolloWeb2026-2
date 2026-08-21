type EstudianteProm = { nombre: string; promedio: number };

const estudiantes12: EstudianteProm[] = [
  { nombre: "Juan", promedio: 3.75 },
  { nombre: "Maria", promedio: 4.25 },
  { nombre: "Pedro", promedio: 3.25 },
];

console.log("Estudiantes con promedio mayor a 3.5:");
for (const e of estudiantes12) {
  if (e.promedio > 3.5) console.log(e.nombre);
}

type Materia = { nombre: string; nota: number };
type Estudiante = { nombre: string; semestre: number; materias: Materia[] };

const estudiantes11: Estudiante[] = [
  {
    nombre: "Juan",
    semestre: 3,
    materias: [
      { nombre: "Matematicas", nota: 4.0 },
      { nombre: "Programacion", nota: 3.5 },
    ],
  },
  {
    nombre: "Maria",
    semestre: 2,
    materias: [
      { nombre: "Matematicas", nota: 4.5 },
      { nombre: "Programacion", nota: 4.0 },
    ],
  },
  {
    nombre: "Pedro",
    semestre: 1,
    materias: [
      { nombre: "Matematicas", nota: 3.0 },
      { nombre: "Programacion", nota: 3.5 },
    ],
  },
];

let sumaPromedios11 = 0;
for (const estudiante of estudiantes11) {
  let suma = 0;
  for (const materia of estudiante.materias) {
    suma += materia.nota;
  }
  const promedio = suma / estudiante.materias.length;
  console.log("Estudiante:", estudiante.nombre);
  console.log("Promedio:", promedio);
  sumaPromedios11 += promedio;
}

const promedioTodos11 = sumaPromedios11 / estudiantes11.length;
console.log("Promedio de todos:", promedioTodos11);

let radiologia = [
  {
    hora: "11:00",
    medico: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    medico: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    medico: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    medico: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    medico: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];
let traumatologia = [
  {
    hora: "11:00",
    medico: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    medico: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    medico: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    medico: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    medico: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];
let dental = [
  {
    hora: "11:00",
    medico: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    medico: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    medico: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    medico: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    medico: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

document.getElementById("radiologiaP").innerHTML = `<span class="paciente">${radiologia[0].paciente}</span> - ${radiologia[0].prevision}`;
document.getElementById("radiologiaU").innerHTML = `<span class="paciente">${radiologia[radiologia.length - 1].paciente}</span> - ${radiologia[radiologia.length - 1].prevision}`;

document.getElementById("traumatologiaP").innerHTML = `<span class="paciente">${traumatologia[0].paciente}</span> - ${traumatologia[0].prevision}`;
document.getElementById("traumatologiaU").innerHTML = `<span class="paciente">${traumatologia[traumatologia.length - 1].paciente}</span> - ${traumatologia[traumatologia.length - 1].prevision}`;

document.getElementById("dentalP").innerHTML = `<span class="paciente">${dental[0].paciente}</span> - ${dental[0].prevision}`;
document.getElementById("dentalU").innerHTML = `<span class="paciente">${dental[dental.length - 1].paciente}</span> - ${dental[dental.length - 1].prevision}`;

function mostrarTabla() {
  let tabla = document.getElementById("tabla");
  let filas =
      "<tr><th>Hora</th><th>Medico</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";
  for (let i = 0; i < dental.length; i++) {
      filas += `<tr>
    <td>${dental[i].hora}</td>
    <td>${dental[i].medico}</td>
    <td>${dental[i].paciente}</td>
    <td>${dental[i].rut}</td>
    <td>${dental[i].prevision}</td>
    </tr>`;
  }
  tabla.innerHTML = filas;
}

mostrarTabla();
 
// Obtener los elementos span que contienen los nombres de los pacientes //
var pacientes = document.getElementsByClassName("paciente");

// Iterar sobre cada elemento y agregar la clase "paciente" para aplicar estilos //
for (var i = 0; i < pacientes.length; i++) {
    pacientes[i].classList.add("paciente");
}


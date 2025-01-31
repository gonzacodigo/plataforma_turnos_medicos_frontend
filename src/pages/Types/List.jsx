import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/patients")
      .then((response) => setPatients(response.data))
      .catch((error) => console.error("Error al obtener los pacientes:", error));
  }, []);

  return (
    <div id="types">
      <h1>Lista de Pacientes</h1>
      <Link to="/patients/new">Registrar nuevo paciente</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Diagnóstico</th>
            <th>Turno</th>
            <th>Obra Social</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.pac_id}>
              <td>{patient.pac_id}</td>
              <td>
                {patient.usr_name} {patient.usr_lastname}
              </td>
              <td>{patient.dia_descripcion}</td>
              <td>
                {patient.tur_dia} a las {patient.tur_hora}
              </td>
              <td>{patient.os_name}</td>
              <td>
                <Link to={`/patients/${patient.pac_id}`}>Editar</Link>
                <button
                  onClick={() => {
                    if (window.confirm("¿Deseas eliminar este paciente?")) {
                      axios
                        .delete(`http://localhost:5000/patients/${patient.pac_id}`)
                        .then(() =>
                          setPatients(patients.filter((p) => p.pac_id !== patient.pac_id))
                        )
                        .catch((error) =>
                          console.error("Error al eliminar el paciente:", error)
                        );
                    }
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;

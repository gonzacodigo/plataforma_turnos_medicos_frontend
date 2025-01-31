import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctors")
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Error al obtener los doctores:", error));
  }, []);

  const deleteDoctor = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este doctor?")) {
      axios
        .delete(`http://localhost:5000/doctors/${id}`)
        .then(() => setDoctors(doctors.filter((doctor) => doctor.doc_id !== id)))
        .catch((error) =>
          console.error("Error al eliminar el doctor:", error)
        );
    }
  };
  return (
    <div id="doctors">
      <h1>Lista de Doctores</h1>
      <Link to="/doctors/new">Registrar nuevo doctor</Link>
      <table>
        <thead>
          <tr>
            <th>Matrícula</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Horario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doc_id}>
              <td>{doctor.doc_matricula}</td>
              <td>
                {doctor.usr_name} {doctor.usr_lastname}
              </td>
              <td>{doctor.esp_name}</td>
              <td>
                {doctor.hor_dia} ({doctor.hor_franja} - {doctor.hor_duracion})
              </td>
              <td>
                <button onClick={() => navigate(`/doctors/${doctor.doc_id}`)}>
                  Editar
                </button>
                <button onClick={() => deleteDoctor(doctor.doc_id)}>
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

export default DoctorsList;

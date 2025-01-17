import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DoctorsForm = () => {
  const { id } = useParams(); // Obtener el ID del doctor desde la URL
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    doc_matricula: "",
    usr_id: "",
    esp_id: "",
    hor_id: "",
  });

  const [specialities, setSpecialities] = useState([]);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Si hay un ID, cargar los datos del doctor
    if (id) {
      axios
        .get(`http://localhost:5000/doctors/${id}`)
        .then((response) => setDoctor(response.data))
        .catch((error) =>
          console.error("Error al cargar los datos del doctor:", error)
        );
    }

    // Cargar las opciones de especialidades
    axios
      .get("http://localhost:5000/specialities/options")
      .then((response) => setSpecialities(response.data))
      .catch((error) =>
        console.error("Error al cargar las especialidades:", error)
      );

    // Cargar las opciones de horarios
    axios
      .get("http://localhost:5000/schedules/options")
      .then((response) => setSchedules(response.data))
      .catch((error) =>
        console.error("Error al cargar los horarios:", error)
      );
  }, [id]);

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id
      ? `http://localhost:5000/doctors/${id}`
      : "http://localhost:5000/doctors";
    const method = id ? "put" : "post";

    axios[method](url, doctor)
      .then(() => navigate("/doctors"))
      .catch((error) => console.error("Error al guardar el doctor:", error));
  };

  return (
    <div>
      <h1>{id ? "Editar Doctor" : "Registrar Doctor"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="doc_matricula"
          value={doctor.doc_matricula}
          onChange={handleChange}
          placeholder="Matrícula"
          required
        />
        <input
          name="usr_id"
          value={doctor.usr_id}
          onChange={handleChange}
          placeholder="ID de Usuario"
          required
        />

        {/* Select para especialidades */}
        <select
          name="esp_id"
          value={doctor.esp_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una especialidad</option>
          {specialities.map((esp) => (
            <option key={esp.esp_id} value={esp.esp_id}>
              {esp.esp_name}
            </option>
          ))}
        </select>

        {/* Select para horarios */}
        <select
          name="hor_id"
          value={doctor.hor_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione un horario</option>
          {schedules.map((hor) => (
            <option key={hor.hor_id} value={hor.hor_id}>
              {hor.horario}
            </option>
          ))}
        </select>

        <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
      </form>
    </div>
  );
};

export default DoctorsForm;

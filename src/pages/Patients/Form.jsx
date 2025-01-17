import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PatientsForm = () => {
  const { id } = useParams(); // Obtener el ID del paciente desde la URL
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    usr_id: "",
    dia_id: "",
    tur_id: "",
    os_id: "",
  });

  const [medicares, setMedicares] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);
  const [turns, setTurns] = useState([]);

  useEffect(() => {
    // Si estamos editando, cargar los datos del paciente
    if (id) {
      axios
        .get(`http://localhost:5000/patients/${id}`)
        .then((response) => setPatient(response.data))
        .catch((error) =>
          console.error("Error al cargar los datos del paciente:", error)
        );
    }

    // Cargar opciones de obras sociales
    axios
      .get("http://localhost:5000/medicares/options")
      .then((response) => setMedicares(response.data))
      .catch((error) =>
        console.error("Error al cargar las obras sociales:", error)
      );

    // Cargar opciones de diagnósticos
    axios
      .get("http://localhost:5000/diagnistics/options")
      .then((response) => setDiagnostics(response.data))
      .catch((error) =>
        console.error("Error al cargar los diagnósticos:", error)
      );

    // Cargar opciones de turnos
    axios
      .get("http://localhost:5000/turns/options")
      .then((response) => setTurns(response.data))
      .catch((error) =>
        console.error("Error al cargar los turnos:", error)
      );
  }, [id]);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id
      ? `http://localhost:5000/patients/${id}`
      : "http://localhost:5000/patients";
    const method = id ? "put" : "post";
  
    axios[method](url, patient)
      .then(() => navigate("/patients"))
      .catch((error) => console.error("Error al guardar el paciente:", error));
  };
  

  return (
    <div>
      <h1>{id ? "Editar Paciente" : "Registrar Paciente"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="usr_id"
          value={patient.usr_id}
          onChange={handleChange}
          placeholder="ID del Usuario"
          required
        />

        {/* Select para diagnósticos */}
        <select
          name="dia_id"
          value={patient.dia_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione un diagnóstico</option>
          {diagnostics.map((diag) => (
            <option key={diag.dia_id} value={diag.dia_id}>
              {diag.dia_descripcion}
            </option>
          ))}
        </select>

        {/* Select para turnos */}
        <select
          name="tur_id"
          value={patient.tur_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione un turno</option>
          {turns.map((turn) => (
            <option key={turn.tur_id} value={turn.tur_id}>
              {turn.descripcion}
            </option>
          ))}
        </select>

        {/* Select para obras sociales */}
        <select
          name="os_id"
          value={patient.os_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una obra social</option>
          {medicares.map((med) => (
            <option key={med.os_id} value={med.os_id}>
              {med.os_name}
            </option>
          ))}
        </select>

        <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
      </form>
    </div>
  );
};

export default PatientsForm;



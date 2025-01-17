import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [type, setType] = useState({ tip_name: "" });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/types/${id}`)
        .then((response) => setType(response.data))
        .catch((error) => console.error("Error al obtener el tipo:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    setType({ ...type, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id
      ? `http://localhost:5000/types/${id}`
      : "http://localhost:5000/types";
    const method = id ? "put" : "post";

    axios[method](url, type)
      .then(() => navigate("/types"))
      .catch((error) => console.error("Error al guardar:", error));
  };

  return (
    <div>
      <h1>{id ? "Editar Tipo" : "Crear Tipo"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="tip_name"
          value={type.tip_name}
          onChange={handleChange}
          placeholder="Nombre del Tipo"
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UsersForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    usr_user: "",
    usr_password: "",
    usr_name: "",
    usr_lastname: "",
    usr_dni: "",
    usr_email: "",
    usr_phone: "",
    tip_id: "",
  });

  const [types, setTypes] = useState([]); // Para almacenar las opciones de tipos

  useEffect(() => {
    // Cargar datos del usuario si estamos editando
    if (id) {
      axios
        .get(`http://localhost:5000/users/${id}`)
        .then((response) => setUser(response.data))
        .catch((error) =>
          console.error("Error al obtener el usuario:", error)
        );
    }

    // Cargar las opciones de tipos
    axios
      .get("http://localhost:5000/types/options")
      .then((response) => setTypes(response.data))
      .catch((error) =>
        console.error("Error al obtener las opciones de tipos:", error)
      );
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = id
      ? `http://localhost:5000/users/${id}`
      : "http://localhost:5000/users";
    const method = id ? "put" : "post";

    axios[method](url, user)
      .then(() => navigate("/users"))
      .catch((error) => console.error("Error al guardar el usuario:", error));
  };

  return (
    <div>
      <h1>{id ? "Editar Usuario" : "Crear Usuario"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="usr_user"
          value={user.usr_user}
          onChange={handleChange}
          placeholder="Usuario"
          required
        />
        <input
          name="usr_password"
          value={user.usr_password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />
        <input
          name="usr_name"
          value={user.usr_name}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          name="usr_lastname"
          value={user.usr_lastname}
          onChange={handleChange}
          placeholder="Apellido"
        />
        <input
          name="usr_dni"
          value={user.usr_dni}
          onChange={handleChange}
          placeholder="DNI"
        />
        <input
          name="usr_email"
          value={user.usr_email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="usr_phone"
          value={user.usr_phone}
          onChange={handleChange}
          placeholder="Teléfono"
        />

        {/* Select para tip_id */}
        <select
          name="tip_id"
          value={user.tip_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione un tipo</option>
          {types.map((type) => (
            <option key={type.tip_id} value={type.tip_id}>
              {type.tip_name}
            </option>
          ))}
        </select>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default UsersForm;

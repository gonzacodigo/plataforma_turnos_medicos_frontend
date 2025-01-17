import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error al obtener los usuarios:", error));
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => setUsers(users.filter((user) => user.usr_id !== id)))
      .catch((error) => console.error("Error al eliminar el usuario:", error));
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <Link to="/users/new">Crear nuevo usuario</Link>
      <ul>
        {users.map((user) => (
          <li key={user.usr_id}>
            {user.usr_name} {user.usr_lastname} - {user.usr_email}{" "}
            <button onClick={() => deleteUser(user.usr_id)}>Eliminar</button>
            <Link to={`/users/${user.usr_id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

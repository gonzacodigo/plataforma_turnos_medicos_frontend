import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pacientes = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/"); // Redirigir al login si no hay sesión
    }
  }, [navigate]);

  return (
    <div id="pacientes">
      {/* <h2>Bienvenido, {user}</h2> muestra a toda la tupla */}
            
      <h2>Bienvenido, {user?.[3]} {user?.[4]}</h2>  {/* Nombre y apellido */}
      <p>ID: {user?.[0]}</p>
      <p>Usuario: {user?.[1]}</p>
      <p>Email: {user?.[6]}</p>
      <p>Teléfono: {user?.[7]}</p>
      <p>Estado: {user?.[8] === 1 ? "Activo" : "Inactivo"}</p>

      {/* Mostrar más datos si es necesario */}
    </div>  
  );
};

export default Pacientes;
  
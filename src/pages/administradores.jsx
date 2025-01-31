import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Administradores = () => {
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

  // Redirige al archivo HTML externo del calendario
  const goToCalendar = () => {
    window.location.href = "/calendar.html";
  };

  return (
    <div id="administradores">
      <h2>Bienvenido, {user?.[3]} {user?.[4]}</h2>  {/* Nombre y apellido */}
      <p>ID: {user?.[0]}</p>
      <p>Usuario: {user?.[1]}</p>
      <p>Email: {user?.[6]}</p>
      <p>Teléfono: {user?.[7]}</p>
      <p>Estado: {user?.[8] === 1 ? "Activo" : "Inactivo"}</p>

      {/* Botón para redirigir al calendario */}
      <button 
        onClick={goToCalendar} 
        style={{ padding: "10px 20px", background: "#dc3545", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Ir al Calendario
      </button>
    </div>
  );
};

export default Administradores;

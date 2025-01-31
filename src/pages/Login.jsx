import { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router para redirección

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook para redirección

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/validar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      // console.log("Usuario logueado:", data.user);
      // console.log("Email:", data.user[8]);
      if (response.ok) {
        // Guardar datos del usuario en localStorage o contexto
        localStorage.setItem("user", JSON.stringify(data.user));


        //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        

        //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        
        // Redirigir a la página de perfil o dashboard
        if(data.user[8]==1)
          navigate("/doctores");
        else if(data.user[8]==2) {
                navigate("/pacientes");
              } else if(data.user[8]==3) {
                         navigate("/administradores");
                         
        }else{
          navigate("/recepcionistas");
        }
      }else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error en el login", error);
      setError("Error de conexión");
    }
  };

  return (
    <div id="login">
      <h2>Formulario de Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /> <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /> <br />
        <button type="submit">Iniciar sesión</button>
        <br />
        
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* Botón de registro */}
      <button onClick={() => navigate("/registro")} style={{ marginTop: "10px", backgroundColor: "blue", color: "white" }}>
        Registrarse
      </button>
    </div>
  );
};

export default Login;
  

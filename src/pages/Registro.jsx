import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
    const navigate = useNavigate();

    const [usr_user, setUser] = useState("");
    const [usr_password, setPassword] = useState("");
    const [usr_name, setName] = useState("");
    const [usr_lastname, setLast_Name] = useState("");
    const [usr_dni, setDNI] = useState("");
    const [usr_email, setEmail] = useState("");
    const [usr_phone, setPhone] = useState("");
    const [os_id, setOsId] = useState(""); // Obra social seleccionada
    const [medicares, setMedicares] = useState([]); // Lista de obras sociales
    const tip_id = 2; // Tipo de usuario paciente

    useEffect(() => {
        // Cargar obras sociales
        fetch("http://127.0.0.1:5000/medicares")
            .then(response => response.json())
            .then(data => setMedicares(data))
            .catch(error => console.error("Error al obtener obras sociales:", error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const UserData = {
            usr_user,
            usr_password,
            usr_name,
            usr_lastname,
            usr_dni,
            usr_email,
            usr_phone,
            tip_id
        };
    
        //console.log("Enviando UserData:", UserData);
    
        try {
            //  PRIMER FETCH - Crear usuario
            const response = await fetch("http://127.0.0.1:5000/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(UserData),
            });
    
            if (!response.ok) {
                throw new Error("Error en el primer fetch");
            }
    
            const data = await response.json();
            console.log("Respuesta del primer fetch:", data); //  Verifica si devuelve `usr_id`
    
            if (!data.usr_id) {
                throw new Error("El primer fetch no devolvió usr_id");
            }
    
            const pacienteData = {
                dia_id: null,
                tur_id: null,
                usr_id: data.usr_id, //  Asegura que esto no sea undefined
                os_id: parseInt(os_id), //  Verifica que os_id tiene un valor válido
            };
    
            //console.log("Enviando pacienteData:", pacienteData);
    
            //  SEGUNDO FETCH - Crear paciente
            const response2 = await fetch("http://127.0.0.1:5000/patients", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pacienteData),
            });
    
            if (!response2.ok) {
                throw new Error("Error en el segundo fetch");
            }
    
            console.log("Paciente creado con éxito");
    
            //  Redirección tras éxito
            navigate(`/`);
    
        } catch (error) {
            console.error("Error al crear usuario/paciente:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="box" style={styles.form}>
                <h1 className="title">Nuevo Usuario</h1>
                <div className="field">
                    <label className="label">Nombre de usuario</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Ingrese el nombre de usuario Ej: User15"
                            value={usr_user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                            maxLength={255}
                            minLength={1}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Ingrese el password </label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Ingrese el password Ej: pasWord158"
                            value={usr_password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            maxLength={255}
                            minLength={1}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Ingrese el Nombre/s </label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Ingrese el nombre/s Ej: Pablo"
                            value={usr_name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            maxLength={255}
                            minLength={1}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Ingrese Apellido/s </label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Ingrese el apellido/s Ej: Arce"
                            value={usr_lastname}
                            onChange={(e) => setLast_Name(e.target.value)}
                            required
                            maxLength={255}
                            minLength={1}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Ingrese DIN</label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            placeholder="Ingrese DNI sin puntos Ej: 546879641"
                            value={usr_dni}
                            onChange={(e) => setDNI(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Ingrese email </label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Ingrese el E-mail Ej: Arce18@gmail.com"
                            value={usr_email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            maxLength={255}
                            minLength={1}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Ingrese el numero telefonico </label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            placeholder="Ingresar el telefono  Ej: 387514587"
                            value={usr_phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Obra Social</label>
                    <div className="control">
                        <div className="select">
                            <select value={os_id} onChange={(e) => setOsId(e.target.value)} required>
                                <option value="">Seleccione una obra social</option>
                                {medicares.map((medicare) => (
                                    <option key={medicare.os_id} value={medicare.os_id}>
                                        {medicare.os_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button type="submit" className="button is-primary">
                            Ingresar Usuario
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const styles = {
    form: {
        maxWidth: '600px',
        margin: '0 auto',
    },
};

export default Registro;
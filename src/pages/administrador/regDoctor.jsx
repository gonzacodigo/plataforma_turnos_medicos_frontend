import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function AddDoctor() {

    const navigate = useNavigate();
  
    const [usr_user, setUser] = useState("");
    const [usr_password, setPassword] = useState("");
    const [usr_name, setName] = useState("");
    const [usr_lastname, setLast_Name] = useState("");
    const [usr_dni, setDNI] = useState("");
    const [usr_email, setEmail] = useState("");
    const [usr_phone, setPhone] = useState("");
    const [doc_matricula, setMatricula] = useState("");
    const tip_id = 2

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
            //console.log("Respuesta del primer fetch:", data); //  Verifica si devuelve `usr_id`
    
            if (!data.usr_id) {
                throw new Error("El primer fetch no devolvió usr_id");
            }
    
            const pacienteData = {
                doc_matricula : doc_matricula,
                usr_id : data.usr_id,
            };
    
            //console.log("Enviando pacienteData:", pacienteData);
    
            //  SEGUNDO FETCH - Crear paciente
            const response2 = await fetch("http://127.0.0.1:5000/doctor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(pacienteData),
            });
    
            if (!response2.ok) {
                throw new Error("Error en el segundo fetch");
            }
    
            console.log("Recepcionista creado con éxito");
    
            //  Redirección tras éxito
            navigate(`/Home`);
    
        } catch (error) {
            console.error("Error al crear usuario/paciente:", error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="box" style={styles.form}>
                <h1 className="title">Ingresar nuevo Doctor</h1>
                <div className="field">
                    <label className="label">Nombre de usuario</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Ingrese el nombre de usuari Ej: User15"
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
                            min={0}
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
                    <label className="label">Ingrese el numero telefonico ()</label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            placeholder="Ingresar el numero telefonico  Ej: 387514587"
                            value={usr_phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            min={0}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Matriccula </label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            placeholder="Ingresa matricula EJ: 514587"
                            value={doc_matricula}
                            onChange={(e) => setMatricula(e.target.value)}
                            required
                            min={0}
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button type="submit" className="button is-primary">
                            Agregar Doctor
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

export default AddDoctor;
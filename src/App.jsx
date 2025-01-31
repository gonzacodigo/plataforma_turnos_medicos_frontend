import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TypesList from "./pages/Types/List";
import TypesForm from "./pages/Types/Form";
import UsersList from "./pages/Users/List";
import UsersForm from "./pages/Users/Form";
import PatientsList from "./pages/Patients/List";
import PatientsForm from "./pages/Patients/Form";
import DoctorsList from "./pages/Doctors/List";
import DoctorsForm from "./pages/Doctors/Form";
import Login from "./pages/Login";
import Pacientes from "./pages/pacientes";
import Doctores from "./pages/doctores";
import Administradores from "./pages/administradores";
import Recepcionistas from "./pages/recepcionistas";
import CalendarContainer from './components/CalendarContainer';

export default function App() {
  // Asume que obtienes estos valores dinámicamente del sistema de autenticación
  const userId = 1; // Simulación del ID del usuario autenticado
  const userType = 'doctor'; // Simulación del tipo de usuario (puede ser doctor, paciente, etc.)

  return (
    <Router>
      <div id="contenedor">
        <header>
          <h1>Clinica Médica</h1>
        </header>
        <nav id="menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/users">Usuarios</Link></li>
            <li><Link to="/patients">Pacientes</Link></li>
            <li><Link to="/doctors">Doctores</Link></li>
            <li><Link to="/login">Ingresar</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/types" element={<TypesList />} />
        <Route path="/types/new" element={<TypesForm />} />
        <Route path="/types/:id" element={<TypesForm />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/new" element={<UsersForm />} />
        <Route path="/users/:id" element={<UsersForm />} />
        <Route path="/patients" element={<PatientsList />} />
        <Route path="/patients/new" element={<PatientsForm />} />
        <Route path="/patients/:id" element={<PatientsForm />} />
        <Route path="/doctors" element={<DoctorsList />} />
        <Route path="/doctors/new" element={<DoctorsForm />} />
        <Route path="/doctors/:id" element={<DoctorsForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/doctores" element={<Doctores />} />
        <Route path="/administradores" element={<Administradores />} />
        <Route path="/recepcionistas" element={<Recepcionistas />} />
        
        {/* Ruta para el calendario */}
        <Route 
          path="/calendar" 
          element={<CalendarContainer userId={userId} userType={userType} />} 
        />
      </Routes>
    </Router>
  );
}

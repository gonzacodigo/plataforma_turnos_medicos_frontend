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
import DynamicHTML from "./components/DynamicHTML"; // Importa el componente
import DynamicHTMLDoctor from "./components/DynamicHTMLDoctor";  // Importa el nuevo componente

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/types">Tipos</Link></li>
          <li><Link to="/users">Usuarios</Link></li>
          <li><Link to="/patients">Pacientes</Link></li>
          <li><Link to="/doctors">Doctores</Link></li>
          <li><Link to="/calendar.html">Calendario</Link></li> {/* Enlace al calendario */}
          <li><Link to="/doctor.html">MARCAR DIAS NO LABORABLES</Link></li> {/* Enlace al calendario */}
        </ul>
      </nav>

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
        <Route path="/calendar.html" element={<DynamicHTML />} /> {/* Ruta para el calendario */}
        <Route path="/doctor.html" element={<DynamicHTMLDoctor />} /> {/* Ruta para el calendario */}
      </Routes>
    </Router>
  );
}

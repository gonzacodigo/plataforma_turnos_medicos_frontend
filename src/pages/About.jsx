export default function About() {
    return (
      <div id="about">
          
          
    <div className="container mt-1">
      {/* Presentación de la Clínica */}
      <div className="text-center">
        <h1 className="mb-1">Quiénes Somos</h1>
        <p className="lead">
          En <strong>Clínica Salud & Bienestar</strong>, nos dedicamos a brindar atención médica de calidad con un equipo de profesionales altamente capacitados. Nuestra misión es ofrecer servicios de salud con tecnología de vanguardia y un enfoque humano.
        </p>
      </div>

      {/* Imagen de la Clínica */}
      <div className="text-center my-4">
        <img src="../public/img/descarga.jpg" className="img-fluid rounded shadow" alt="Clínica Salud & Bienestar" />
      </div>

      {/* Director Médico */}
      <div className="row align-items-center my-5">
        <div className="col-md-4 text-center">
          <img src="../public/img/doctor.png" className="rounded-circle img-fluid shadow" alt="Director Médico" />
        </div>
        <div className="col-md-8">
          <h3>Dr. Juan Pérez</h3>
          <p className="text-muted">Director Médico</p>
          <p>
            Con más de 20 años de experiencia en medicina general y especialización en cardiología, el Dr. Juan Pérez lidera nuestra clínica con un compromiso inquebrantable por la excelencia y el bienestar de nuestros pacientes.
          </p>
        </div>
      </div>

      {/* Equipo Médico */}
      <h2 className="text-center my-5">Nuestro Equipo</h2>
      <div className="row">
        {[
          { src: "../public/img/doctora1.png", name: "Dra. Ana López", specialty: "Pediatría" },
          { src: "../public/img/doctor2.png", name: "Dr. Carlos Ramírez", specialty: "Cirugía General" },
          { src: "../public/img/doctora2.png", name: "Enf. María González", specialty: "Enfermería" }
        ].map((member, index) => (
          <div key={index} className="col-md-4 text-center">
            <img src={member.src} className="rounded-circle img-fluid shadow mb-3" alt={member.name} />
            <h5>{member.name}</h5>
            <p className="text-muted">{member.specialty}</p>
          </div>
        ))}
      </div>

      {/* Pie de Página */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p>© 2024 Clínica Salud & Bienestar. Todos los derechos reservados.</p>
      </footer>
    </div>
      </div>
      
    );
  }
  

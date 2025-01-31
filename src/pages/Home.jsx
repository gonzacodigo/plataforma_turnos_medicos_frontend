export default function Home() {
    return (
      <div id="inicio">

<div id="carouselExample" className="carousel slide w-75 mx-auto" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[
            { src: "../img/frente.png", alt: "Fachada de clínica" },
            { src: "../img/pediatra1.png", alt: "Médico atendiendo a paciente" },
            { src: "../img/pediatra2.png", alt: "Equipos médicos" },
            { src: "../img/pasillo.png", alt: "Sala de espera" },
            { src: "../img/ambulancia.png", alt: "Sala de cirugía" }
          ].map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={item.src} className="d-block w-100" alt={item.alt} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Sección de Cards */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <div className="row">
          {[
            { src: "../img/consulta.png", title: "Consulta Médica", text: "Atención profesional con los mejores especialistas." },
            { src: "../img/radiologia.png", title: "Radiología", text: "Tecnología avanzada para un diagnóstico preciso." },
            { src: "../img/farmacia.png", title: "Farmacia", text: "Medicamentos y productos de salud a tu disposición." }
          ].map((card, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <img src={card.src} className="rounded-circle img-fluid shadow mb-3 w-75 mx-auto" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href="#" className="btn btn-primary">Más información</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pie de Página */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p>© 2024 Clínica Salud & Bienestar. Todos los derechos reservados.</p>
      </footer>
    </div>
        
      
    );
  }
  

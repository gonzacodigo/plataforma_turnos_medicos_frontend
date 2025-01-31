export default function Home() {
    return (
      <div id="inicio">
        <div>
      {/* Carrusel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={num} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={`https://picsum.photos/800/400?random=${num}`} className="d-block w-100" alt={`Slide ${num}`} />
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
        <h2 className="text-center mb-4">Galería de Imágenes</h2>
        <div className="row">
          {[1, 2, 3].map((num) => (
            <div key={num} className="col-md-4">
              <div className="card">
                <img src={`https://picsum.photos/400/300?random=${num + 5}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Imagen {num}</h5>
                  <p className="card-text">Descripción breve de la imagen {num}.</p>
                  <a href="#" className="btn btn-primary">Ver más</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pie de Página */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p>© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>

      </div>
      
    );
  }
  

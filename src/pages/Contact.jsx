export default function Contact() {
    return (
      <div id="contact">
        
        <div className="container mt-1">
      <h1 className="text-center mb-4">Contacto</h1>
      <p className="text-center lead">
        Contáctanos para más información o para agendar una cita. Estamos aquí para ayudarte.
      </p>

      <div className="row">
        {/* Formulario */}
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h4 className="mb-3 text-center">Envíanos un mensaje</h4>
            <form >
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre"  required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" name="email"   required />
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="text" className="form-control" name="telefono"   required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows="4" name="mensaje"  required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
            </form>
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h4 className="mb-3 text-center">Información de Contacto</h4>
            <p><strong>Dirección:</strong> Calle 123, Ciudad, País</p>
            <p><strong>Teléfono:</strong> +123 456 789</p>
            <p><strong>Email:</strong> contacto@clinicamedica.com</p>
            <p><strong>Horario de Atención:</strong></p>
            <ul>
              <li>Lunes - Viernes: 8:00 AM - 7:00 PM</li>
              <li>Sábados: 9:00 AM - 2:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>

            {/* Mapa */}
            <div className="mt-3">
              <iframe
                title="Mapa Clínica"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092336!2d144.9537353157083!3d-37.8162797420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1dfcf15%3A0x3fcdde3c1f384fdf!2sHospital%20Clinic!5e0!3m2!1ses!2ses!4v1625249545148!5m2!1ses!2ses"
                width="100%" height="200" style={{ border: "0" }} allowFullScreen loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Pie de Página */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p>© 2024 Clínica Salud & Bienestar. Todos los derechos reservados.</p>
      </footer>
    </div>


      </div>
    );
  }
  

import React, { useEffect } from 'react';

const CalendarContainer = ({ userId, userType }) => {
  useEffect(() => {
    // Cargar el script de calendar.js dinámicamente
    const script = document.createElement('script');
    script.src = '/public/js/calendario.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.initCalendarWithUser) {
        window.initCalendarWithUser(userId, userType);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [userId, userType]);

  return (
    <div>
      <h1>Calendario de Turnos Médicos</h1>
      <div id="calendar"></div> {/* Contenedor del calendario */}
      {/* Popups */}
      <div id="event-popup" style={{ display: "none" }}>Formulario de turno</div>
      <div id="details-popup" style={{ display: "none" }}>Detalles del turno</div>
      <div className="popup-overlay" style={{ display: "none" }}></div>
    </div>
  );
};

export default CalendarContainer;

import React, { useEffect, useState } from "react";

const DynamicHTMLDoctor = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/doctor.html")  // Ruta al archivo doctor.html
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error loading doctor HTML:", error));
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default DynamicHTMLDoctor;

import React, { useEffect, useState } from "react";

const DynamicHTML = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/calendar.html")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error loading HTML:", error));
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default DynamicHTML;

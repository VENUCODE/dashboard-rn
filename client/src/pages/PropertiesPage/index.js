import React, { useEffect, useState } from "react";
const PropertiesPage = () => {
  const [Properties, setProperties] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://rightneeds.azurewebsites.net/properties",
          { method: "GET" }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json();
        setProperties(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="content-body container">
      <h1>Properties Page</h1>
      <div>
        {Loading && <span>Fetching properties</span>}
        <div>
          {!Loading &&
            Properties &&
            Properties.map((item, index) => <pre key={index}>{item}</pre>)}
        </div>
      </div>
      ;
    </div>
  );
};

export default PropertiesPage;
